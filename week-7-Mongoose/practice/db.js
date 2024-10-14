const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const User = new Schema({
    email:String,
    password:String,
    name:String
})

const Todo = new Schema({
    title:String,
    done:Boolean,
    userId:ObjectId
})

const UserModel = mongoose.model('User',User);
const TodoModel = mongoose.model('Todo',Todo);

module.exports = {UserModel, TodoModel}