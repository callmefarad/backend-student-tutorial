const functions = require("firebase-functions");
const admin = require("firebase-admin");
const express = require("express");
const cors = require("cors");
const app = express();

// service account details
const serviceAccount = require("./permissions.json");
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});
const db = admin.firestore();

app.use(cors({ origin: true }));
// const ref = db.collection("StudentBiodata");

// creating all endpoint with their functions
// entry point
app.get("/", (req, res) => {
  res.status(200).send("Hello API");
});

// create a student
app.post("/api/student", async (req, res) => {
  try {
    const data = {
      name: req.body.name,
      course: req.body.course,
      duration: req.body.duration,
    };

    const student = await db.collection("StudentBiodata").doc().create(data);
    res.status(200).json({ student });
  } catch (error) {
    res.status(4000).json({ message: error.message });
  }
});

// get all students
app.get("/api/student", async (req, res) => {
  try {
    // const userQuerySnapshot = await db.collection("StudentBiodata").get();
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
app.get("/api/student/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const document = await db.collection("StudentBiodata").doc(id).get();
    const student = await document.data();
    res.status(200).json({ student });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
});

// update a student
app.put("/api/student/:id", async (req, res) => {
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

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
