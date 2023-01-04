import { User } from "../model/user.js";
import { citymodel } from "../model/city.js";
import Error from "../utils/error.js"
import tryCatch from "../middleware/tryCatch.js";

export const addUser = tryCatch(async(req,res,next)=>{
    const data = req.body
    const {name,city,mobile} = data
   
    if(!name.match(/[a-zA-Z]$/)){
        return next(new Error("please provide letters",400))
    }
    if(!city.match(/[a-zA-Z]$/)){
        return next(new Error("please provide letters",400))
    }

   const findcity = await citymodel.findOne({city})
   if(!findcity){
    return next(new Error("Please provide valid city name",400))
   }

   if(!mobile.match(/[0-9]$/)){
    return next(new Error("please provide number",400))
   }

   let saveData = await User.create(data)

   return res.status(201).send({status:true,data:saveData})
})      