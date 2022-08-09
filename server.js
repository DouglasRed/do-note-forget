const express = require("express");
const app = express();

const { notes } = require("./develop/db/db.json");

app.get("/api/notes", (req, res) => {
  let results = notes;
  console.log(req.query);
  res.json(results);
});

app.listen(3002, () => {
  console.log(`API server now on port 3002!`);
});
