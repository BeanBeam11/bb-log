const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    photo: String,
    password: {
        type: String,
        required: true,
        minlength: 8,
        select: false,
    },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
