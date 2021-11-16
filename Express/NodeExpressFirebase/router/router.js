
const express = require('express')
const router = express.Router();
const {newFootballer} = require('../controller/controller');


router.post('/footballer', newFootballer);

module.exports = router;