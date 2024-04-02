const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://admin-risindu:risindu123@expensetracker.eylgenx.mongodb.net/');

app.listen(5000, () => {
    console.log('Server has started on port 5000');
});