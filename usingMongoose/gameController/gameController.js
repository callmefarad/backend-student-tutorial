const gameModel = require("../gameModel/gameModel");

// create a new gamer
const newGamer = async (req, res) => {
  try {
    const gamer = await gameModel.create({
      name: req.body.name,
      game: req.body.game,
      date: Date.now(),
    });
    res.status(201).json({ gamer });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// show all gamers

// update a single gamer

// delete a single gamer

// show a single gamer

// delete all gamer

module.exports = {
  newGamer,
};
