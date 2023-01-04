import mongoose from "mongoose"
import {app} from "./app.js"


import { connectDatabase } from "./config/database.js"
import {config} from "dotenv"

config({path:"./config/config.env"})

connectDatabase()
mongoose.set('strictQuery', true)

app.listen(process.env.PORT, ()=>{
    console.log("sever connected to port"+process.env.PORT)
})