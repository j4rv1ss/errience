import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    city:{
        type:String,
        required:true,
        trim:true
    },
    mobile:{
        type:String,
        required:true,
         trim:true
    }
})

export const User = mongoose.model("userwithcity", userSchema)