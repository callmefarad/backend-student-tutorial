const express = require("express");
const port = 4000;
const mongoose = require("mongoose");
const gameRoute = require("./gameRouter/gameRouter");

const app = express();
app.use(express.json());

// create a connection to mongoDB atlas
mongoose.connect(
  "mongodb+srv://callmefarad:B577f2Ai8bh6txuT@blog.eenxj.mongodb.net/gameDB?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  }
);

// connect to the DB
mongoose.connection
  .once("open", () => {
    console.log("DB connected successfully");
  })
  .on("error", () => {
    console.log("Error trying to connect to DB");
  });

app.get("/", (req, res) => {
  res.send("A modern way of writing an API");
});

app.use("/api", gameRoute);

app.listen(port, () => {
  console.log(`Server is not listening to port: ${port}`);
});
