const mongoose = require('mongoose')

const AddUserSchema = new mongoose.Schema({
    Name: { type: String, required: true, unique: true },
    Email: { type: String, required: true},
    Role: { type: String, required: true},
    Number: String,
    Password: { type: String, required: true}
})

const AddUserModel = mongoose.model("User", AddUserSchema)
module.exports = AddUserModel