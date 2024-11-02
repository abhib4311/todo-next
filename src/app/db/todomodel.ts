import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const Todo = mongoose.models.todos || mongoose.model("todos", todoSchema);
export default Todo;