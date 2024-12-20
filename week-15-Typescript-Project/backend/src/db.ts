import mongoose, { Schema } from "mongoose"

mongoose.connect('mongodb+srv://admin:sdWrBsXuYHdxK3sb@cluster0.plktz.mongodb.net/Brainly')

const userSchema = new Schema({
    username: {type:String, unique:true},
    password: {type:String, required:true}
})

export const userModel = mongoose.model("User", userSchema)

const contentSchema = new Schema({
    link: String,
    type: {type: String },    
    title: String,
    tags: [{type: Schema.ObjectId, ref: "Tag"}],
    userId: {type: Schema.ObjectId, ref:"User", required: true}
})

export const contentModel = mongoose.model("Content", contentSchema)