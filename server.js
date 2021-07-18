const http = require("http");
const port = 4000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json");
  console.log("server created");
  res.end();
});

server.listen(port, () => {
  console.log(`server connected to port ${port}`);
});
