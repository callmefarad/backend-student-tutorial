const http = require("http");
const students = require("./http/jsons/students.json");
const student = require("./http/jsons/student.json");
const errorResult = require("./http/jsons/404.json");
const port = process.env.PORT || 4000;

const server = http.createServer((req, res) => {
  console.log("server created");

  if (req.url === "/") {
    res.write(JSON.stringify(students));
    console.log(JSON.stringify(students));
  } else if (req.url === "/student") {
    res.write(JSON.stringify(student));
    console.log(JSON.stringify(student));
  } else {
    res.write(JSON.stringify(errorResult));
    console.log(JSON.stringify(errorResult));
  }
  // console.log(req.url);

  res.end();
});

server.listen(port, () => {
  console.log(`server is listening to port: ${port}`);
});
