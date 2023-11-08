// Load environment variables from the '.env' file.
        require("dotenv").config();
// ----Steps to link your server with the database:

// ---->Step 1: Install the mongoose package to connect to database.
//         using--> npm i mongoose
      
//-----> Step 2: Import mongoose
        const mongoos = require("mongoose");
       
// Step 3: Define a function to establish the connection between your server and the database.
        const Database =()=>{
          mongoos.connect(process.env.DATABASE_URL,{
           useNewUrlParser: true, 
           useUnifiedTopology: true
          })
          .then(()=>{console.log("database connected successful");})
          .catch((Error)=>{console.log('not able to connect ...  ',Error);})
         
        }
         
        module.exports = Database;