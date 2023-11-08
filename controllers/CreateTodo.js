// This controller file contains the business logic

const Todo = require("../models/Todo");

exports.CreateTodo = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      res.status(540).json({
        success: false,
        message: "Please fill all the fields",
      });
    }

    const response = await Todo.create({ title, description });
    res.status(200).json({
      success: true,
      data: response,
      message: "Entry Created Successfully",
    });
  } catch (err) {
    console.error(err);
    console.log(err);
    res.status(500).json({
      success: false,
      message: "internal server error",
      data: err.message,
    });
  }
};
