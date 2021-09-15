const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const Route = require("./gameRoute/gameRoute");
const port = process.env.PORT || 4000;

// console.log(process.env.DATABASE_URI);
// create connection
mongoose.connect(
  "mongodb+srv://callmefarad:B577f2Ai8bh6txuT@blog.eenxj.mongodb.net/gameDB?retryWrites=true&w=majority",
  // process.env.DATABASE_URI,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);

// open the connection
mongoose.connection
  .once("open", () => {
    console.log("Connection Successful");
  })
  .on("error", () => {
    console.log("Error is: ", error.message);
  });

const app = express();
app.use(express.json());

app.use("/api/uploads", express.static("./uploads"));
app.use("/api/", Route);
app.get("/", (req, res) => {
  res.send("Modern API");
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
