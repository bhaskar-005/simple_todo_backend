const Todo = require("../models/Todo");

exports.DeleteTodo = async(req,res)=>{
    try {
        console.log('trying to delete');
        const{id} =req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).json({
            success:true,
            message:"todo removed"
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({
            success:false,
            message:"todo not removed"
        })
    }
}
