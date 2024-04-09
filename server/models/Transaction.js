const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user_id: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    
    date: {
        type: Date,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
});

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction;