const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    Title: { type: String, required: true },
    Detail: { type: String, required: true },
    Date: String,
    Assign_by: { type: String, required: true },
    Working_by: { type: String, required: true },
    Status: { type: String, required: true }
})

const TaskModel = mongoose.model("Task", TaskSchema)
module.exports = TaskModel