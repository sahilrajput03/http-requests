const express = require("express");
const app = express();
const cors = require("cors");
const {log} = console;

const PORT = 8080;
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("You made a get request on '/' endpoint.");
});

app.get("/a", (req, res) => {
  res.status(201).send("You made 'get' request on '/a' endpoint.");
});

app.get("/b", (req, res) => {
  log(req.body);
  res.send(req.body); // You don't need res.json to serialize js object to json, express does this on its own🤺︎.
});

app.get("/c", (req, res) => {
  res.send(req.query);
});

app.listen(PORT, function () {
  console.log("express running on", PORT, "...");
});
