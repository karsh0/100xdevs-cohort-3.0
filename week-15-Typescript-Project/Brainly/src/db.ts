import mongoose, { Schema } from "mongoose"

mongoose.connect('mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/Brainly')

const userSchema = new Schema({
    username: {type:String, unique:true},
    password: String
})

export const userModel = mongoose.model("user", userSchema)

const contentSchema = new Schema({
    link: String,
    type: {type: String },    
    title: String,
    tags: [{type: mongoose.Schema.ObjectId, ref: "tag"}],
    userId: {type: Schema.ObjectId, ref:"user"}
})

export const contentModel = mongoose.model("content", contentSchema)