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
  // if (
  //   !req.body.name ||
  //   !req.body.course ||
  //   req.body.name.length < 3 ||
  //   req.body.course.length < 3
  // ) {
  //   res.status(400).send("Field can't be empty or less than 3 characters'");
  //   return;
  // }

  // using joi to validate the user entry
  // create a schema
  const schema = {
    name: Joi.string().min(3).max(20).required(),
    course: Joi.string().min(3).max(20).required(),
  };

  // validate the request body based on the schema
  const result = Joi.validate(req.body, schema);
  if (result.error) {
    res.status(400).send(result.error.details[0].message);
    return;
  }

  // create a new student object
  const stud = {
    id: codelab.length + 1,
    name: req.body.name,
    course: req.body.course,
  };
  codelab.push(stud);
  res.send(stud);
  console.log(stud);
});

// updating a student - PUT REQUEST
app.put("/api/student/:id", (req, res) => {
  // find the course
  const stud = codelab.find((stu) => stu.id === parseInt(req.params.id));
  // check for 404 errors
  if (!stud) {
    res.status(404).send(`No such student with id: ${req.params.id}`);
  }

  // const schema = {
  //   name: Joi.string().min(3).max(20).required(),
  //   course: Joi.string().min(3).max(20).required(),
  // };
  // // validate the course
  // const result = Joi.validate(req.body, schema);
  // // send the updated course
  // if (result.error) {
  //   res.status(400).send(result.error.details[0].message);
  //   return;
  // }

  const { error } = validateStudent(req.body);
  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }
  stud.name = req.body.name;
  stud.course = req.body.course;
  res.send(stud);
});

// delete student route - DELETE
app.delete("/api/student/:id", (req, res) => {
  const stud = codelab.find((stu) => stu.id === parseInt(req.params.id));
  if (!stud) {
    res.status(404).send(`No such student with id: ${req.params.id}`);
  }

  // get the index position of the student
  const studentPosition = codelab.indexOf(stud);
  // delete index specified by studentPosition and display only the index value
  codelab.splice(studentPosition, 1);
  res.status(200).send(stud);
});

// function for validating student.
const validateStudent = (student) => {
  const schema = {
    name: Joi.string().min(3).max(20).required(),
    course: Joi.string().min(3).max(20).required(),
  };
  return Joi.validate(student, schema);
};

app.listen(port, () => {
  console.log(`app is listening to port: ${port}`);
});
