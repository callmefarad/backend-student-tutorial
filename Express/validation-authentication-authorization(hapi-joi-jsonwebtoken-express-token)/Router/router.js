const express = require("express");
const router = express.Router();
const { signUp, signIn, users, delUser, updateUsers, homepage } = require("../Controller/userController");
const {isSignedIn} = require('../Controller/userController')

// route for registration
router.post("/register", signUp);

// route for login
router.get("/login", signIn);

// route for all users
router.get("/users", users);

// delete a user
router.delete("/users/:id", delUser);

// update a user
router.put("/users/:id", updateUsers);

// route to private page
router.get("/homepage", isSignedIn, homepage);

module.exports = router;
