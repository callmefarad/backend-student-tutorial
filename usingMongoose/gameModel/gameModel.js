const mongoose = require("mongoose");

// create a schema
const gameSchema = mongoose.Schema({
  name: {
    type: "String",
    required: true,
  },
  game: {
    type: "String",
    required: true,
  },
  date: {
    type: Date,
    default: Date.now(),
  },
});

// create a model
const gameModel = mongoose.model("gameModel", gameSchema);

module.exports = gameModel;
