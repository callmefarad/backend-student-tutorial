const express = require("express");
require("./utils/db");
require("dotenv").config();
const Route = require("./gameRoute/gameRoute");
const port = process.env.PORT || 4000;

const app = express();
app.use(express.json());

app.use("/api/uploads", express.static("./uploads"));
app.use("/api", Route);
app.get("/", (req, res) => {
  res.send("Modern API");
});

app.listen(port, () => {
  console.log(`Server is listening to port ${port}`);
});
