
const mongoose = require('mongoose');

// registration and login schema
const loginSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    token: {
        type: String
    },
})

// model for the schema
const loginModel = mongoose.model("loginModel", loginSchema);

module.exports = loginModel;