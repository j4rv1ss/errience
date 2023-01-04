import mongoose from "mongoose";


const citySchema = new mongoose.Schema({
    city:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }
})

export const citymodel = mongoose.model("city",citySchema)