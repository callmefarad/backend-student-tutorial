const express = require("express");
const port = 4000;
const app = express();
app.use(express.json());

const gamers = [
  { id: 1, name: "John", game: "Draft" },
  { id: 2, name: "Chika", game: "Tennis" },
  { id: 3, name: "Lebile", game: "Soccer" },
  { id: 4, name: "Stella", game: "CandyCrush" },
  { id: 5, name: "Judith", game: "Football" },
];

// our endpoints
app.get("/", (req, res) => {
  res.send("Welcome to gamers API");
});

// all gamers
app.get("/api/gamers", (req, res) => {
  console.log(gamers);
  res.send(gamers);
});

// a single gamer
app.get("/api/gamers/:id", (req, res) => {
  const gamerId = gamers.find((gamer) => gamer.id === parseInt(req.params.id));
  if (!gamerId) {
    res.status(404).send(`Invalid id: ${req.params.id}`);
  }
  res.send(gamerId);
});

// create new gamer
app.post("/api/gamers", (req, res) => {
  if (!req.body.name || !req.body.game) {
    res.send("OOPS fields cannot be empty, try again.");
  }
  const newGamer = {
    id: gamers.length + 1,
    name: req.body.name,
    game: req.body.game,
  };
  gamers.push(newGamer);
  res.send(gamers);
});

// updating a gamer
app.put("/api/gamers/:id", (req, res) => {
  if (!req.body.name || !req.body.game) {
    res.send("OOPS fields cannot be empty, try again.");
  }
  const gamerId = gamers.find((gamer) => gamer.id === parseInt(req.params.id));
  if (!gamerId) {
    res.status(404).send(`Invalid id: ${req.params.id}`);
  }

  gamerId.name = req.body.name;
  gamerId.game = req.body.game;
  res.send(gamerId);
});

// deleting a gamer
app.delete("/api/gamers/:id", (req, res) => {
  const gamerId = gamers.find((gamer) => gamer.id === parseInt(req.params.id));
  if (!gamerId) {
    res.status(404).send(`Invalid id: ${req.params.id}`);
  }

  const gamerPosition = gamers.indexOf(gamerId);
  gamers.splice(gamerPosition, 2);
  res.send(gamerId);
});

app.listen(port, (req, res) => {
  console.log(`Server is listening to port: ${port}`);
});
