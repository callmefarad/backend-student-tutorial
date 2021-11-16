
const firebase = require('../config/db');
const Football = require('../model/model')
const db = firebase.firestore();


// create a new footballer
const newFootballer = async (req, res) => {
    try {
        const data = req.body;
        const footballer = await db.collection('footballers').doc().set(data);
        if(!footballer){
            res.json({message: "Could create a footballer."})
        }else{
            res.json({message: "New footballer is created successfully.", data: footballer})
        }
    }catch(err) {
        res.json({message: err.message})
    }
}

module.exports = {
    newFootballer,
}