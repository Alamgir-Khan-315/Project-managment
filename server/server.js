const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const jwt = require('jsonwebtoken');

const AddUserModel = require("./Model/AddUser")
const TaskModel = require("./Model/Task")

const app = express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb://127.0.0.1:27017/Project_managment");

// ////////////// log in

app.post('/AddUser', (re, res) => {
    AddUserModel.create(re.body)
        .then(User => res.json(User))
        .catch(err => res.json(err))
})

app.post("/login", async (re, res) => {
    const { Role, Name, Password } = re.body;
    AddUserModel.findOne({ Name: Name })
        .then(user => {
            if (!user) {
                console.log("No user found")
                return res.json({ message: "No user found" })
            }
            if (user) {
                console.log("User found")

                if (user.Role === Role && user.Password === Password) {
                    console.log("Successfully log in")
                    // const id = user.data._id
                    // const token = jwt.sign({ ID: user._id, Role: user.Role, Name: user.Name }, 'secretkey')
                    return res.json(user), { message: "Successfully Logged in" };
                } else { console.log("invalid role or Password`") }
            }
            // thn end
        })
})

/////////////////// admin
app.get('/GetUser', (req, res) => {
    AddUserModel.find()
        .then(users => res.json(users))
        .catch(err => res.json(err))
})

app.post('/DelUser:id', async (req, res) => {
    const { userid } = req.body;
    try {
        AddUserModel.deleteOne({ _id: userid })
        res.send({ status: "ok", data: "deleted" })
    }
    catch (err) { console.log(err) }
})

/////////////////// Manager
app.get('/FetchData/:id', async (re, res) => {
    try {
        const id = re.params.id;
        const UserExist = await AddUserModel.findById(id)

        if (!UserExist) {
            return res.json({ msg: "User not exist" })
        }
        res.json(UserExist)
    } catch (error) {
        res.json(error)
    }
})

/////////////////// Task manager
app.post('/AddTask', (re, res) => {
    TaskModel.create(re.body)
        .then(task => res.json(task))
        .catch(err => res.json(err))
})

app.get('/GetTask', (req, res) => {
    TaskModel.find()
        .then(tasks => res.json(tasks))
        .catch(err => res.json(err))
})



app.listen(3001, () => {
    console.log("Server is Runing ... ")
})