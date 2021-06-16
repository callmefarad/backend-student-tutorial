const express = require("express");
const router = express.Router();
const { newGamer } = require("../gameController/gameController");

// new gamer route
router.post("/gamers", newGamer);

module.exports = router;
