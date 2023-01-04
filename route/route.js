import express from "express"
import { addCity } from "../controller/cityController.js"
import { addUser } from "../controller/userController.js"

const router = express.Router()


router.post("/city",addCity)
router.post("/user", addUser)


export default router