const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/Users');
const Transaction = require('./models/Transaction');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST'],
    credentials: true
}
));

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin-risindu:risindu123@expensetracker.eylgenx.mongodb.net/ExpenseTracker?retryWrites=true&w=majority');

const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    if(!token){
        return res.json("You need to Login");
    }else{
        jwt.verify(token, "jwt-secret-key", (err, decoded) => {
            if(err){
                return res.json("Invalid Token");
            }else{
               if(decoded.role === "user"){
                   next();
                }else{
                    return res.json("You are not authorized");
                }   
            }
        });
    }
}

app.get('/home', verifyUser,(req, res) => {
    res.json({Status:"Success"});
});


app.get('/transactions', verifyUser, async (req, res) => {
    try {
        const user_id = req.query.user_id;
        // Fetch user's initial income from the User collection
        const user = await User.findById(user_id);
        const initialIncome = user.income;

        // Fetch additional incomes recorded in the Transaction collection
        const transactions = await Transaction.find({ user_id: user_id, type: 'income' });
        const additionalIncome = transactions.reduce((total, transaction) => total + transaction.amount, 0);

        // Calculate total income by summing initial income and additional incomes
        const totalIncome = initialIncome + additionalIncome;

        // Fetch user's transactions (excluding income transactions for pie chart)
        const userTransactions = await Transaction.find({ user_id: user_id, type: { $ne: 'income' } });

        // Send total income and transactions as response
        res.json({ totalIncome, transactions: userTransactions });
    } catch (error) {
        console.error('Error fetching transactions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get('/expenses', verifyUser, async (req, res) => {

    function getDateFilter(timePeriod) {
    const currentDate = new Date();
    let startDate;

    switch (timePeriod) {
        case 'Today':
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
            break;
        case 'Week':
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() - 7, 0, 0, 0);
            break;
        case 'Month':
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate(), 0, 0, 0);
            break;
        case 'Year':
            startDate = new Date(currentDate.getFullYear() - 1, currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
            break;
        default:
            // If timePeriod is not recognized, default to 'Today'
            startDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate(), 0, 0, 0);
            break;
    }

    return { $gte: startDate, $lt: currentDate }; // Return a MongoDB date filter object
}

    try {
        const user_id = req.query.user_id;
        const timePeriod = req.query.period; // Get the time period from the query parameters

        // Define a date filter based on the selected time period
        const dateFilter = getDateFilter(timePeriod); // Implement getDateFilter function

        // Fetch expenses based on user_id, type, and date filter
        const expenses = await Transaction.aggregate([
            { $match: { user_id: user_id, type: 'expense', date: dateFilter } }, // Apply date filter
            { $group: { _id: '$category', totalAmount: { $sum: '$amount' } } }
        ]);

        // Prepare data in the format expected by the frontend
        const categoryWiseExpenses = expenses.map(expense => ({
            category: expense._id,
            amount: expense.totalAmount
        }));

        res.json(categoryWiseExpenses);
    } catch (error) {
        console.error('Error fetching expenses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

// Route for fetching category-wise expenses for a user
app.get('/category-expenses', verifyUser, async (req, res) => {
    try {
        const user_id = req.query.user_id;
        const categoryExpenses = await Transaction.aggregate([
            { $match: { user_id: user_id, type: 'expense' } },
            { $group: { _id: '$category', totalAmount: { $sum: '$amount' } } }
        ]);
        res.json(categoryExpenses);
    } catch (error) {
        console.error('Error fetching category-wise expenses:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});



app.listen(5000, () => {
    console.log('Server has started on port 5000');
});

app.post('/signup', (req, res) => {
    const {username, email, income, password, confirmPassword} = req.body;
    hashedPassword = bcrypt.hashSync(password, 10);
    if(password !== confirmPassword){
        res.json('Passwords do not match');
    }else{
    User.create({
        username,
        email,
        income,
        password: hashedPassword
    })
    .then((user) => {
        return res.json({Status:"Success Signup"});
    })
    .catch((err) => {
        res.status(400).json(err);
    });
    }
});

app.post('/login', (req, res) => { 
    const {email, password} = req.body;
    
    User.findOne({email:email})
        .then((user) => {
            if(user){
                if(bcrypt.compareSync(password, user.password)){
                    const token = jwt.sign({email:user.email, role:user.role},"jwt-secret-key",{expiresIn: "1d"});
                    res.cookie('token', token);
                    return res.json({Status: "Success Login",role:user.role, username:user.username, user_id:user._id});

                }else{
                    return res.json("Password is incorrect");
                }
            }
        })
        .catch((err) => {
            res.json("User not found");
        });

});

app.post('/add', (req, res) => {
    const { user_id, amount, category, description, type } = req.body;

    Transaction.create({
        user_id: user_id,
        category: category,
        amount: amount,
        date: new Date(),
        type: type,
        description: description,
    })
    .then((transaction) => {
        return res.json({ Status: "Transaction Added" });
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

