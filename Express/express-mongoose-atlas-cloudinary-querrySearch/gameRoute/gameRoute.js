const express = require("express");
const route = express.Router();
const {
  newGamer,
  allGamer,
  searchGamer,
  singleGamer,
  updateGamer,
  deleteGamer,
  deleteAllGamers,
} = require("../gameController/gameController");
const uploadImage = require("../utils/multer");

// endpoint for a new gamer
route.post("/cloud-gamers", uploadImage.single("avater"), newGamer);

// endpoint for all gamers
route.get("/cloud-gamers", allGamer);

// endpoint for searching gamers
route.get("/cloud-gamers/search", searchGamer);


// endpoint for a single gamer
route.get("/cloud-gamers/:id", singleGamer);

// endpoint for update gamer
route.put("/cloud-gamers/:id", uploadImage.single("image"), updateGamer);

// endpoint for deleted gamer
route.delete("/cloud-gamers/:id", deleteGamer);

// endpoint for deleting all gamers
route.delete("/cloud-gamers", deleteAllGamers);
module.exports = route;
