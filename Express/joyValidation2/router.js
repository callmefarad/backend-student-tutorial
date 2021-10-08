const express = require("express");
const router = express.Router();
const privateRoute = require("./privateRoute");
const { signUp, signIn, users, homepage } = require("./controller");

// route for registration
router.post("/register", signUp);

// route for login
router.get("/login", signIn);

// route for all users
router.get("/users", users);

// private route for the homepage
router.get("/homepage", privateRoute, homepage);

module.exports = router;
