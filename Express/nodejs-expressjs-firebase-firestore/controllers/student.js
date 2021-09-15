'use strict';

const firebase = require('../db');
const Student = require('../models/student');
const firestore = firebase.firestore();

const ref = firestore.collection('Student')
// add a student to firestore
const addStudent = async (req, res, next) => {
    try {
        const data = {
            name: req.body.name,
            course: req.body.course,
        }
        await ref.doc().create(data);
        res.status(200).json({message: "Saved successfully", data: data});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    addStudent,
}