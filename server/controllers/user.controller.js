import asyncHandler from "../utils/asyncHandler.js";

import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
const userRegister=asyncHandler(async(req,res)=>{
    
const encryptedPassword=await bcrypt.hash("9675486612",10)

const newUser=await User.create({
    username:"Nikhil@1235",
    fullname:"Nikhil Sharma",
    email:"nikhil.pandit.901@gmail.com1",
    password:encryptedPassword,
    gender:"Male",
    avatar:"null"

})


if(!newUser) throw new ApiError(401,"User not Created")

    res.status(201).json(new ApiResponse(201,newUser,"User Created Successfully!!"))
})


const userLogin =asyncHandler((req,res)=>{
    res.send("User Login Successfully!!")
})

export{userLogin,userRegister}