const http = require("http");
const port = 4000;
const student = require("./http/jsons/student.json");
const allStudent = require("./http/jsons/students.json");
const errorPage = require("./http/jsons/404.json");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("server created");

  // // getting response from different end-points
  // if (req.url === "/") {
  //   res.write(JSON.stringify(allStudent));
  //   console.log(JSON.stringify(allStudent));
  // } else if (req.url === "/student") {
  //   res.write(JSON.stringify(student));
  //   console.log(JSON.stringify(student.name));
  // } else {
  //   res.write(JSON.stringify(errorPage));
  //   console.log(JSON.stringify(errorPage));
  // }

  switch (req.url) {
    case "/":
      res.write(JSON.stringify(allStudent));
      console.log(JSON.stringify(allStudent));
      break;
    case "/student":
      res.write(JSON.stringify(student));
      console.log(JSON.stringify(student));
      break;
    default:
      res.write(JSON.stringify(errorPage));
      console.log(JSON.stringify(errorPage));
  }
  res.end();
});

server.listen(port, () => {
  console.log(`server connected to port ${port}`);
});
