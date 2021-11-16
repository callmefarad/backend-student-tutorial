
const gameModel = require("../gameModel/gameModel");
const cloudinary = require("../utils/cloudinary");
const bcrypt = require("bcryptjs");

// create a new gamer
const newGamer = async (req, res) => {
  try {
    const { email, password } = req.body;
    const userByEmail = await gameModel.findOne({ email });
    if (userByEmail) {
      res.json({ message: `user with ${email} already exists` });
    } else {
      const result = await cloudinary.uploader.upload(req.file.path);
      console.log(result);

      // let gamer = new gameModel({
      //   name: req.body.name,
      //   game: req.body.game,
      //   image: result.secure_url,
      //   cloudinary_id: result.public_id,
      // });
      // await gamer.save();
      // res.status(200).json({ gamer });

      const salt = await bcrypt.genSalt(10);
      const hashPassword = await bcrypt.hash(password, salt);

      const gamer = await gameModel.create({
        name: req.body.name,
        game: req.body.game,
        email: req.body.email,
        password: hashPassword,
        path: req.file.path,
        image: result.secure_url,
        cloudinary_id: result.public_id,
      });
      res.status(201).json({ gamer });
      console.log(gamer);
    }
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

const searchGamer = async (req, res) => {
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
  searchGamer,
  singleGamer,
  updateGamer,
  deleteGamer,
  deleteAllGamers,
};
