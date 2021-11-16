const express = require('express');
const carRouter = express.Router();
const {
  showAllCar,
  newCar,
  updateCar,
  deleteCar,
  singleCar,
} = require("../Controller/carController");
const {isSignedIn} = require('../Controller/userController')
// const { privateRoute } = require('../privateRoute');


// end points for cars
// all cars
carRouter.get("/", showAllCar);

// Get a car
carRouter.get("/car/id", isSignedIn, singleCar);

// Create car
carRouter.post("/car", isSignedIn, newCar);

// Updated car
carRouter.patch("/car/:id", isSignedIn, updateCar);

// Deleted car
carRouter.delete("/car/:id", isSignedIn, deleteCar);


module.exports = carRouter;