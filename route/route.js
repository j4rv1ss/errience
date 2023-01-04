import express from "express"
import { addCity, getCity } from "../controller/cityController.js"
import { addUser } from "../controller/userController.js"

const router = express.Router()


router.post("/city",addCity)
router.get("/getcity",getCity)
router.post("/user", addUser)


export default router