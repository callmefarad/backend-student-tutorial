const express = require("express");
const port = 4000;

const students = [
  { id: 1, name: "john", course: "web" },
  { id: 2, name: "judith", course: "mobile" },
  { id: 3, name: "ben", course: "mobile" },
  { id: 4, name: "kate", course: "mobile" },
  { id: 5, name: "emma", course: "web" },
];

const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("using express");
});

app.get("/api/students", (req, res) => {
  res.send(students);
});

app.get("/api/students/:id", (req, res) => {
  const student = students.find((x) => x.id === parseInt(req.params.id));
  if (!student) {
    res.send(`Invalid id: ${req.params.id}`);
  }
  res.send(student);
});
app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
