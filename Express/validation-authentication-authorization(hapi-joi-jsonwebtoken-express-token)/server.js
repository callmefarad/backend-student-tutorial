require('dotenv').config();
const express = require("express");
const mongoose = require("mongoose");
const port = 2021;
const userRouter = require("./Router/router");
const carRouter = require("./Router/carRouter");

// const dbURL = "mongodb://localhost:27017/Login";

const app = express();
app.use(express.json());

mongoose
  .connect(`${process.env.MONGODB_URI}`, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected");
  })
  .catch((err) => console.log(err));

// CRUD routes
app.use("/api", userRouter);
app.use("/api", carRouter);
// entry route
app.get("/", (req, res) => {
  res.status(200).json({ message: "An API with Joy Validation" });
});

app.listen(port, () => {
  console.log(`listening on port: ${port}`);
});
