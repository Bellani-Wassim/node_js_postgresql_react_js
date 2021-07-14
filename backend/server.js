const express = require("express");
const app = express();
const pool = require("./db");
var cors = require("cors");

require("dotenv").config();
app.use(cors());

const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/", async (req, res) => {
  try {
    const allStudents = await pool.query(`SELECT * FROM student`);
    res.json(allStudents.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.get("/:id", async (req, res) => {
  try {
    // ou bien  ====>   const {id}=req.params
    const allStudents = await pool.query(
      `SELECT * FROM student WHERE ID=${req.params.id}`
    );
    res.json(allStudents.rows);
  } catch (error) {
    console.error(error.message);
  }
});

app.post("/add", async (req, res) => {
  try {
    const { matricule, nom, prenom, note } = req.body;
    const newStudent = await pool.query(
      `INSERT INTO student Values (${[matricule]},'${[nom]}','${[prenom]}',${[
        note,
      ]}) RETURNING *`
    );
    res.json(newStudent);
  } catch (error) {
    console.error(error.message);
  }
});

app.listen(PORT, () => {
  console.log(`connecte au port ${PORT}`);
});
