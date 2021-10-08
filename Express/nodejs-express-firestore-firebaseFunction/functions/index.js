// import functions and admin from firebase
const functions = require("firebase-functions");
const admin = require("firebase-admin");

// import express library
const express = require("express");

// import cors for exposing your API for frontend consumption
const cors = require("cors");

// create an instance of express object
const app = express();

// service account details from firestore
const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

// create a firestore instance
const db = admin.firestore();

app.use(cors({ origin: true }));
// const ref = db.collection("StudentBiodata");

// creating all endpoint with their functions
// entry point
app.get("/", (req, res) => {
  res.status(200).send("Express Firestore, Firebase-Function API");
});

// create a student
// REQUEST METHOD: POST
app.post("/api/student", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      course: req.body.course,
      duration: req.body.duration,
    };

    const student = await db.collection("StudentBiodata").doc().create(data);
    if (!student) {
      res.status(400).json({ message: "There was an error creating student." });
    }
    res.status(200).json({ student });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// get all students
// REQUEST METHOD: GET
app.get("/api/student", async (req, res) => {
  try {
    const userQuerySnapshot = await db.collection("StudentBiodata").get();
    const students = [];
    userQuerySnapshot.forEach((doc) => {
      students.push({ id: doc.id, data: doc.data });
    });
    res
      .status(200)
      .json({ message: "List of all the students", data: students });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// get a student
// REQUEST METHOD: GET
app.get("/api/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const document = await db.collection("StudentBiodata").doc(id).get();
    if (!document) {
      res.status(404).json({ message: "Student with id " + id + " not found" });
    }
    const student = await document.data();
    res.status(200).json({ student });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// update a student
// REQUEST METHOD: PATCH

app.patch("/api/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const document = db.collection("StudentBiodata").doc(id);
    await document.update({
      name: req.body.name,
      course: req.body.course,
      duration: req.body.duration,
    });
    res.status(200).json({ id: id, message: "Student updated successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// delete a student
// REQUEST METHOD: DELETE
app.delete("/api/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const document = db.collection("StudentBiodata").doc(id);
    await document.delete();
    res.status(200).json({ message: "Student deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

exports.app = functions.https.onRequest(app);
