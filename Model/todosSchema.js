const mongoose = require("mongoose");

const todosSchema = new mongoose.Schema({
  todoName: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true,
  },
});

const todos = mongoose.model("todos", todosSchema);
module.exports = todos;
