const mongoose = require('mongoose');

const UserDetails = mongoose.Schema({
    username: String,
    password: String
}, {
    timestamps: true
});

module.exports = mongoose.model('User',UserDetails );