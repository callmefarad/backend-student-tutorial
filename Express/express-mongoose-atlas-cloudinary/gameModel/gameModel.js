const mongoose = require("mongoose");
const validator = require("validator");

// create a schema
const gameSchema = mongoose.Schema({
  name: {
    type: "String",
    required: true,
    trim: true,
    validate(value) {
      if (value.length < 3) {
        throw new Error("Name must be more than three(3) character long.");
      }
    },
  },
  game: {
    type: "String",
    required: true,
    trim: true,
    validate(value) {
      if (value.length < 3) {
        throw new Error("Game must be more than three(3) character long.");
      }
    },
  },
  path: {
    type: String,
  },
  image: {
    type: "String",
    required: true,
  },
  cloudinary_id: {
    type: String,
  },
  email: {
    type: String,
    require: true,
    validate(value) {
      if (!validator.isEmail(value)) throw new Error("Bad Email Format!");
    },
  },
  password: {
    type: String,
    require: true,
    minLength: 3,
  },
  date: {
    type: "Date",
    required: true,
    default: Date.now,
  },
});

// create a model
const gameModel = mongoose.model("gameModel", gameSchema);

module.exports = gameModel;
