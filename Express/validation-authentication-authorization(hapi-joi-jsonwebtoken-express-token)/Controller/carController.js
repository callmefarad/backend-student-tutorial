
const carModel = require("../Model/carModel");
const { carData } = require("../validateUser");

// show all cars
const showAllCar = async (req, res) => {
  try {
    const car = await carModel.find();
    if (!car) return res.status(404).json({ message: "No car found." });
    res.status(200).json({ message: "All cars", data: car });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// get a single car
const singleCar = async (req, res) => {
  try {
    const carId = req.params.id;
    if (!carId) {
      res.status(404).json({ message: `No such id of: ${carId}` });
    }
    const car = carModel.findById(carId);
    res.status(200).json({data: car});
  } catch (error) {
    res.status(404).json({ message: error.message})
  }
}

// create a new car
const newCar = async (req, res) => {
  try {
    const { error } = carData(req.body);
    if (error) {
      res.status(401).json({ message: error.details[0].message });
    }

    const data = {
      name: req.body.name,
      model: req.body.model,
      color: req.body.color,
      engine: req.body.engine,
    };

    const car = await carModel.create(data);
    if (!car) {
      res.status(401).json({ message: "Data can not be empty." });
    }

      res.status(200).json({ data: car });
  } catch (error) {
    res.status(401).json({ message: error.message });
  }
};

// Update a car
const updateCar = async (req, res) => {
  try {
    const { error } = carData(req.body);
    if (error) {
      res.status(401).json({ message: error.details[0].message });
    }

    const carId = req.params.id;
    if (!carId) {
      res.status(404).json({ message: `No car id of: ${carId}` });
    }
    const data = {
      name: req.body.name,
      model: req.body.model,
      color: req.body.color,
      engine: req.body.engine,
    };
    const updatedCar = await carModel.findOneAndUpdate(carId, data, { new: true });
    if (!updatedCar) {
      res.status(404).json({message: "There was an error updating car"})
    }
    res.status(200).json({message: "Update successfully", data: updatedCar});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// function to delete a car
const deleteCar = async (req, res) => {
  try {
    const carId = req.params.id;
    if (!carId) {
      res.status(404).json({ message: `No car id of: ${carId}` });
    }
    const deletedCar = carModel.findByIdAndRemove(carId);
    if (!deletedCar) {
      res.status(404).json({message: "Could not delete the card"})
    }
    res.status(200).json({message: "Car deleted successfully"})
  } catch (error) {
    res.status(500).json({ message: error.message})
  }
}

module.exports = {
  showAllCar,
  newCar,
  updateCar,
  deleteCar,
  singleCar,
};
