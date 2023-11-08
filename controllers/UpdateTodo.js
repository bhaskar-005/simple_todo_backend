const Todo = require("../models/Todo");

exports.UpdateTodo = async(req,res)=>{
 try {
    const {id }= req.params; 
  
    const {title,description} =req.body;

    const updatedtodo = await Todo.findByIdAndUpdate(
        id,
        {title,description},
     
    )
    res.status(200).json({
        success:true,
        data:updatedtodo,
        message:"data updated"
    })

 } catch (error) {
    console.log(error);
    res.status(500).json({
        success:false,
        message:"not able to update"
    })
 }   
}

