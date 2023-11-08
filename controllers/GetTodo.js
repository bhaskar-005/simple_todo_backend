const { response } = require("express");
const Todo = require("../models/Todo");

exports.GetTodo = async(req,res)=>{
   try {
    const allTodo = await Todo.find({}) 
    res.status(200).json(
        {
            success:"true",
            data:allTodo,
            message:"data fetched.."
        }
    )
   } catch (error) {
    console.log(error);
    res.status(500).json({
        success:"false",
        message:"not able to fetch data"
    })
    
   }
}