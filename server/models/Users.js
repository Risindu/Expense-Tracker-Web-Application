const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        min: 6,
        max: 20
    },
    email: {
        type: String,
        required: true,
        max: 50
    },
    password: {
        type: String,
        required: true,
        min: 6
    },
    income: {
        type: Number,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    }
});

const User = mongoose.model('user', UserSchema);
module.exports = User;