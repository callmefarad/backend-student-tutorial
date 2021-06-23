const express = require("express");
const gameModel = require("../gameModel/gameModel");

// create a new gamer
const newGamer = async (req, res) => {
  try {
    const gamer = await gameModel.create({
      name: req.body.name,
      game: req.body.game,
      date: Date.now(),
    });
    res.status(200).json({ gamer });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// all gamers
const allGamer = async (req, res) => {
  try {
    const gamers = await gameModel.find();
    res.status(200).json({ gamers });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// a new single gamer
const singleGamer = async (req, res) => {
  try {
    const gamer = await gameModel.findById(req.params.id);
    res.status(200).json({ gamer });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// update a gamer
const updateGamer = async (req, res) => {
  try {
    // get the gamer by id
    const gamer = await gameModel.findById(req.params.id);
    // update the gamer
    const updatedGamer = await gamer.updateOne(req.body);
    res.status(200).json(updatedGamer);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// delete a gamer
const deleteGamer = async (req, res) => {
  try {
    const gamer = await gameModel.findById(req.params.id);
    const deletedGamer = await gamer.deleteOne();
    res.status(200).json({ deletedGamer });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

// delete all gamers
const deleteAllGamers = async (req, res) => {
  try {
    const gamer = await gameModel.deleteMany();
    res
      .status(200)
      .json({ message: "All user have been successfully deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  newGamer,
  allGamer,
  singleGamer,
  updateGamer,
  deleteGamer,
  deleteAllGamers,
};
