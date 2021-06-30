require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const Route = require("./gameRoute/gameRoute");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

// create connection
mongoose.connect(
  "mongodb+srv://callmefarad:B577f2Ai8bh6txuT@blog.eenxj.mongodb.net/gameDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

mongoose.connection
  .once("open", () => {
    console.log("Connection Successful");
  })
  .on("error", () => {
    console.log("Error trying to connect to the database,");
  });

app.get("/", (req, res) => {
  res.send("Modern API");
});
app.use("/api/v1/gamers/uploads", express.static("./uploads"));
app.use("/api/v1", Route);

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
