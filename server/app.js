const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/Users');
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
                    return res.json({Status: "Success Login",role:user.role, username:user.username});

                }else{
                    return res.json("Password is incorrect");
                }
            }
        })
        .catch((err) => {
            res.json("User not found");
        });
});