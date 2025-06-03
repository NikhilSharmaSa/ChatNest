import jwt from 'jsonwebtoken'
import asyncHandler from '../utils/asyncHandler.js'
import ApiError from '../utils/apiError.js'


const verifyJWT=asyncHandler(async(req,res,next)=>{
    const accessToken=req.cookies.accessToken.accessToken
    console.log(accessToken)
if (!accessToken) throw new ApiError(401,"Inva;id Access Token")

const userData= jwt.verify(accessToken,process.env.ACCESS_TOKEN)
console.log(userData)
req.user=userData
next()
})


export default verifyJWT