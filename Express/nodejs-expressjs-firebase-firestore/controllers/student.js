'use strict';


const Student = require('../models/student');
const {app, firebase} = require('../db');
const { getFirestore, collection, getDoc, setDoc, deleteDoc } = require('firebase/firestore/lite');
const db = getFirestore(app);
const db2 = getFirestore(app)
const ref = collection(db, 'Student')
const ref2 = collection(db2, 'Student')
// add a student to firestore
const addStudent = async (req, res) => {
    try {
        const data = req.body;
        await ref2.doc().create(data);
        // await setDoc(ref, data);
        res.status(200).json({message: "Saved successfully", data: data});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

module.exports = {
    addStudent,
}