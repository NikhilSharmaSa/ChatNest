import asyncHandler from "../utils/asyncHandler.js";

const userLogin=asyncHandler(async(req,res)=>{
    
    res.send("This is Login Route!!")
})


export{userLogin}