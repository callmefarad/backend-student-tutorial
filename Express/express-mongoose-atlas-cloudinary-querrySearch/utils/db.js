require("dotenv").config();
const mongoose = require("mongoose");

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
    console.log("connection error");
  });
