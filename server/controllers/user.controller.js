import asyncHandler from "../utils/asyncHandler.js";

import User from '../models/user.model.js'
import bcrypt from 'bcrypt'
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
const userRegister=asyncHandler(async(req,res)=>{

    const {username,fullname,email,password,gender}=req.body
    if(!(username|| fullname || email ||password||gender )) throw new ApiError(401,"All Fields Are Mendatory!!")
const oldUser = await User.findOne({
      $or: [{ email: email }, { username: username }]
    });
    if(oldUser) throw new ApiError(401,"User Already Registered!!")
const encryptedPassword=await bcrypt.hash(password,10)
const avatarType=gender==="male"?"boy":"girl"
const avatar=`https://avatar.iran.liara.run/public/girl?username=${username}`



const newUser=await User.create({
    username:username,
    fullname:fullname,
    email:email,
    password:encryptedPassword,
    gender:gender,
    avatar:avatar

})


if(!newUser) throw new ApiError(401,"User not Created")

    res.status(201).json(new ApiResponse(201,newUser,"User Created Successfully!!"))
})


const userLogin =asyncHandler((req,res)=>{
    res.send("User Login Successfully!!")
})

export{userLogin,userRegister}