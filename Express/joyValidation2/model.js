const express = require('express');
const mongoose = require('mongoose');


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
    }
})

const loginModel = mongoose.model("loginModel", loginSchema);

module.exports = loginModel;