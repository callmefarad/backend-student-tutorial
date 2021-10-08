const express = require("express");
const bcrypt = require("bcrypt");
const loginModel = require("./model");
const { register, login } = require("./validateUser");
const jwt = require("jsonwebtoken");

// show all signed up users
const users = async (req, res) => {
  try {
    const user = await loginModel.find();
    res.status(200).json({ message: "All Logged In Users", data: user });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// register new user
const signUp = async (req, res) => {
  try {
    // extract error from hapi/joy
    const { error } = await register(req.body);

    if (error) {
      res.status(401).json({ message: error.details[0].message });
    }

    // validate email
    const emailChecker = await loginModel.findOne({ email: req.body.email });

    if (emailChecker) {
      res.status(400).json({ message: "Email already exists" });
    }

    saltPassword = await bcrypt.genSalt(10);
    encryptedPassword = await bcrypt.hash(req.body.password, saltPassword);

    const data = {
      username: req.body.username,
      email: req.body.email,
      password: encryptedPassword,
    };

    if (!data) {
      res.status(400).json({ message: "invalid data" });
    }

    const entry = await loginModel.create(data);
    res.status(200).json({ data: entry });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const signIn = async (req, res) => {
    try {
        const { error } = await login(req.body);
        if (error) {
            res.status(401).json({ message: err.message });
        }

        const emailChecker = await loginModel.findOne({ email: req.body.email });

        if (!emailChecker) {
            res.status(401).json({ message: "Invalid Email" });
        }

        const passwordCheck = await bcrypt.compare(
            req.body.password,
            emailChecker.password
        );

        if (!passwordCheck) {
            res.status(401).json({ message: "Incorrect Password" });
        }
        //   res.status(200).json({ message: "LoggedIn Successfully" });

        // Authenticating with jsonwebtoken(jwt)
        const token = jwt.sign({_id: loginModel._id}, process.env.TOKEN_SECRETE);
    res.header("auth-token").send(token);
  } catch (error) {
    res.json({ message: error.message });
  }
};

const homepage = (req, res) => {
  res.status(200).json({
    message: "Welcome!!! You are verified and can view our homepage.s",
  });
};

module.exports = {
  users,
  signUp,
  signIn,
  homepage,
};
