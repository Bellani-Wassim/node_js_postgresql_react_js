const { json } = require("body-parser");
const express = require("express");
const app = express();
var cors = require("cors");

require("dotenv").config();

app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    data: "hey",
  });
});

app.listen(PORT, () => {
  console.log(`connecte au port ${PORT}`);
});
