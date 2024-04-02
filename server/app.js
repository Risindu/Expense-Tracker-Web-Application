const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const User = require('./models/Users');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin-risindu:risindu123@expensetracker.eylgenx.mongodb.net/ExpenseTracker?retryWrites=true&w=majority');

app.listen(5000, () => {
    console.log('Server has started on port 5000');
});

app.post('/signup', (req, res) => {
    User.create(req.body)
    .then((user) => {
        res.json(user);
    })
    .catch((err) => {
        res.status(400).json(err);
    });
});

app.post('/login', (req, res) => { 
    const {email, password} = req.body;
    User.findOne({email:email})
        .then((user) => {
            if(user){
                if(user.password === password){
                    res.json("Success Login");
                }else{
                    res.json("Password is incorrect");
                }
            }
        })
        .catch((err) => {
            res.json("User not found");
        });
});