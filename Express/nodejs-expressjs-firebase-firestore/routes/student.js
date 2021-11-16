const express = require('express');
const router = express.Router();

const { addStudent } = require("../controllers/student.js");

router.post("/student", addStudent);

module.exports = router;