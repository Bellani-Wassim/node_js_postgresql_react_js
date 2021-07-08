const express = require('express');
const app = express();
const pool = require('./db'); 

app.use(express.json);

app.post('/home/post',async (req,res)=>{
    try {
        const article=req.body;
        const newArticle= await pool.query("INSERT INTO")
    } catch (error) {
        
    }
})