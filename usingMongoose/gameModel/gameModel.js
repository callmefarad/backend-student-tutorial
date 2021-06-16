const mongoose = require("mongoose");

const gameSchedule = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: new Date(),
  },
});

const gameModel = mongoose.model("gameModel", gameSchedule);

module.exports = gameModel;
