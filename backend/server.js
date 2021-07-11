const express = require("express");
const cors = require("cors");

require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    data: "hey",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`connecte au port ${PORT}`);
});
