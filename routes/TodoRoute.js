const express = require("express");
const Router = express.Router();
const { CreateTodo } = require("../controllers/CreateTodo");
const { GetTodo } = require("../controllers/GetTodo");
const { UpdateTodo } = require("../controllers/UpdateTodo");
const { DeleteTodo } = require("../controllers/DeleteTodo");

Router.post("/CreateTodo", CreateTodo); // Create
Router.get("/GetTodo", GetTodo); // Read
Router.put("/UpdateTodo/:id", UpdateTodo); // Update
// Use /:id to capture the id parameter from the URL
Router.delete("/DeleteTodo/:id", DeleteTodo);
module.exports = Router;
