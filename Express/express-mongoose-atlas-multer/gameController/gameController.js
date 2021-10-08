const express = require("express");
const gameModel = require("../gameModel/gameModel");
const multer = require("multer");

// creating a disk storage instance( LOCAL STORAGE)
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

// creating an image filter
const fileFilter = (req, file, cb) => {
  if (
    file.mimeType === "image/jpeg" ||
    file.mimeType === "image/png" ||
    file.mimeType === "image/jpg"
  ) {
    cb(null, true)
  }
  else {
    cb(null, "File type is not supported")
  }
}

// function for uploading a single image to the diskStorage created
const uploadImage = multer({
  storage: storage,
  fileFilter: fileFilter,
  limit: {
  fileSize: 1024 * 1024 * 20,
} }).single("avater");

// function for uploading multiple images to the diskStorage
// const uploadImage = multer({storage}).array("image", 3);

// create a new gamer
const newGamer = async (req, res) => {
  try {
    const gamer = await gameModel.create({
      name: req.body.name,
      game: req.body.game,
      image: req.file.path,
    });
    res.status(200).json({ gamer });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// all gamers
// const allGamer = async (req, res) => {
//   try {
//     const gamers = await gameModel.find();
//     res.status(200).json({ gamers });
//   } catch (error) {
//     res.status(404).json({ message: error.message });
//   }
// };
const allGamer = async (req, res) => {
  // declare the match variable
  const match = {};
  // validate the user search using "query" keyword from express to scan
  if (req.query.name) {
    match.name = { $regex: req.query.name, $options: "i" };
  }
  if (req.query.game) {
    match.game = { $regex: req.query.game, $options: "i" };
  }

  try {
    const gamer = await gameModel.aggregate([
      {
        $match: match,
      },
    ]);
    res.status(200).json({ gamer });
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
    const data = {
      name: req.body.name || gamer.name,
      game: req.body.game || gamer.game,
      image: req.file.path || gamer.image,
    };
    // update the gamer
    const updatedGamer = await gamer.updateOne(data);
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
  uploadImage,
};
