 
 const express = require('express')
 const app = express();
 const TodoRoute =require('./routes/TodoRoute')
 const Database = require('./config/Database')
 require('dotenv').config();
 const PORT = process.env.PORT || 4000;

 app.use(express.json());
 //for data parsing'

app.use("/api/v1",TodoRoute); // it mounts data this location after default router

app.listen(PORT,()=>{
    console.log("server started..");
 })

 //database connection
 Database();

