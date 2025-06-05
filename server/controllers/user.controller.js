import asyncHandler from "../utils/asyncHandler.js";
import User from '../models/user.model.js'
import bcrypt, { compare } from 'bcrypt'
import ApiError from "../utils/apiError.js";
import ApiResponse from "../utils/apiResponse.js";
import jwt from 'jsonwebtoken'
const userRegister=asyncHandler(async(req,res)=>{

    const {username,fullname,email,password,gender}=req.body
    if(!(username|| fullname || email ||password||gender )) throw new ApiError(401,"All Fields Are Mendatory!!")
const oldUser = await User.findOne({
      $or: [{ email: email }, { username: username }]
    });
    if(oldUser) throw new ApiError(401,"User Already Registered!!")
const encryptedPassword=await bcrypt.hash(password,10)
const avatarType=gender==="male"?"boy":"girl"
const avatar=`https://avatar.iran.liara.run/public/${avatarType}?username=${username}`



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

const userLogin =asyncHandler(async(req,res)=>{
const {username,password}=req.body

if(!(username && password)) throw new ApiError(401,"Please Enter a valid Username & Password!!")

const user=await User.findOne({username})
if(!user) throw new ApiError(401,"User not Registered!!")

    const comparePassword= await bcrypt.compare(password,user.password)
    if(!comparePassword) throw new ApiError(401,"Wrong Password!!")

const userData={
    _id:user?._id
}

const options={
    httpOnly:true,
   secure:process.env.NODE_ENV==="production",
   expires: new Date(Date.now() + 3600000),
   sameSite:'none'
}
const accessToken=jwt.sign(userData,process.env.ACCESS_TOKEN,{expiresIn:process.env.ACCESS_EXPIRE})
const refreshToken=jwt.sign(userData,process.env.REFRESH_TOKEN,{expiresIn:process.env.REFRESH_EXPIRE})
user.accesstoken=accessToken;
user.refreshtoken=refreshToken;
await user.save()
    res.status(201)
    .cookie('accessToken',accessToken,options)
    .cookie('refreshToken',refreshToken,options)
    .json(new ApiResponse(201,{},"User Login Successfully!!"))
})

const getProfile=asyncHandler(async(req,res)=>{
console.log(req.user._id)
const id=req.user._id

const profile=await User.findById(id).select('-password')

res.status(201).json(new ApiResponse(201,profile,"User Profile Fetch Successfully!!"))
})

const userLogout=asyncHandler(async(req,res)=>{
    const options1={
        httpOnly:true,
   secure:process.env.NODE_ENV==="production",
 
   sameSite:'none'
    }
    res.status(201)
    .cookie('accessToken',"",options1)
    .cookie('refreshToken',"",options1)
    .json(new ApiResponse(201,{},"User Logout Successfully!!"))
})


const getAllUsers=asyncHandler(async(req,res)=>{


    const allUsers=await User.find().select("-password")



    res.status(201).json(new ApiResponse(201,allUsers,"All Users Fetch Successfully!!"))
})

export{userLogin,userRegister,getProfile,userLogout,getAllUsers}