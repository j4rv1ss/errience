import express from "express"
import route from "./route/route.js"
import errorHandler from "./middleware/errorHandler.js"
export const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/",route)
app.use(errorHandler)