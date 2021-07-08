 const Pool = require('pg').Pool;
 
 const pool= new Pool({
     user: "postgres",
     password:"Koukikaka1",
     database:"localhost",
     host:"localhost",
     port: 5432
 });

 module.exports = pool;