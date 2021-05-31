const Joi = require("joi");
const express = require("express");
const port = 4000;
const app = express();

const codelab = [
  { id: 1, name: "ade", course: "web" },
  { id: 2, name: "kunle", course: "mobile" },
  { id: 3, name: "judith", course: "mobile" },
  { id: 4, name: "mercy", course: "web" },
];

app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello am using express");
});

app.get("/api/student", (req, res) => {
  res.send(codelab);
});

// creating the routes
// GET REQUEST
app.get("/api/student/:id", (req, res) => {
  const stud = codelab.find((stu) => stu.id === parseInt(req.params.id));
  if (!stud) {
    res.status(404).send(`No such student with id: ${req.params.id}`);
  }
  res.status(200).send(stud);
});

// POST REQUEST
app.post("/api/student", (req, res) => {
  if (
    !req.body.name ||
    !req.body.course ||
    req.body.name.length < 3 ||
    req.body.course.length < 3
  ) {
    res.status(400).send("Field can't be empty or less than 3 characters'");
    return;
  }

  const stud = {
    id: codelab.length + 1,
    name: req.body.name,
    course: req.body.course,
  };
  codelab.push(stud);
  res.send(stud);
});

app.listen(port, () => {
  console.log(`app is listening to port: ${port}`);
});
