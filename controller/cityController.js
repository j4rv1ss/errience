import { citymodel } from "../model/city.js";
import Error from "../utils/error.js"
import tryCatch from "../middleware/tryCatch.js";

export const addCity = tryCatch(async(req,res,next)=>{
    const data = req.body
    const {city}= data

    if(!data.city.match(/[a-zA-Z]$/)){
        return next(new Error("please provide only letters",400))

    }

    const findCity = await citymodel.findOne({city})
    if(findCity){
        return next(new Error("city already existed",400))
    }

    let saveData = await citymodel.create(data)

    return res.status(201).send({status:true,data:saveData})


})

export const getCity = tryCatch(async(req,res,next)=>{
    const cityData = await citymodel.find()
    if(!cityData){
        return next(new Error("no data found",400))

    }
    return res.status(200).send({status:true,totalCity:`${cityData.length}`,data:cityData})

})