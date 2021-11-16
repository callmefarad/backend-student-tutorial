const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    color: {
        type: String,
        required: true,
    },
    engine: {
        type: String,
        required: true,
    }

})

const carModel = mongoose.model('carModel', carSchema);

module.exports = carModel;