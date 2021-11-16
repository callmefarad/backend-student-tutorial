const express = require("express");
const router = express.Router();
const { signUp, signIn, users, homepage } = require("../Controller/userController");

// route for registration
router.post("/register", signUp);

// route for login
router.get("/login", signIn);

// route for all users
router.get("/users", users);

module.exports = router;
