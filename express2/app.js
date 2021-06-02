const express = require("express");
const port = 4000;

const app = express();
app.use(express.json());

const gamers = [
  { id: 1, name: "chidi", game: "acade" },
  { id: 2, name: "romanus", game: "adventure" },
  { id: 3, name: "lebile", game: "soccer" },
  { id: 4, name: "judith", game: "action" },
  { id: 5, name: "cynthia", game: "racing" },
];

// default view
app.get("/", (req, res) => {
  res.send("Hello am coding nodejs");
});

//show all gamers
app.get("/api/gamers", (req, res) => {
  res.send(gamers);
});

// show a single gamer
app.get("/api/gamers/:id", (req, res) => {
  const gamerId = gamers.find((user) => user.id === parseInt(req.params.id));
  if (!gamerId) {
    res.status(404).send(`NO user with this id: ${req.params.id}`);
  }
  res.status(200).send(gamerId);
});

// create new gamer
app.post("/api/gamers", (req, res) => {
  if (!req.body.name || !req.body.game) {
    return res.status(400).send("cant be blank");
  }
  const newGamer = {
    id: gamers.length + 1,
    name: req.body.name,
    game: req.body.game,
  };
  gamers.push(newGamer);
  res.status(200).send(newGamer);
});

app.listen(port, () => {
  console.log(`server is listening on port: ${port}`);
});
