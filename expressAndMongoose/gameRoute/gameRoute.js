const express = require("express");
const route = express.Router();
const {
  newGamer,
  allGamer,
  singleGamer,
  updateGamer,
  deleteGamer,
  deleteAllGamers,
  uploadImage,
} = require("../gameController/gameController");

// endpoint for a new gamer
route.post("/gamers", uploadImage, newGamer);

// endpoint for all gamers
route.get("/gamers", allGamer);

// endpoint for a single gamer
route.get("/gamers/:id", singleGamer);

// endpoint for update gamer
route.put("/gamers/:id", uploadImage, updateGamer);

// endpoint for deleted gamer
route.delete("/gamers/:id", deleteGamer);

// endpoint for deleting all gamers
route.delete("/gamers", deleteAllGamers);
module.exports = route;
