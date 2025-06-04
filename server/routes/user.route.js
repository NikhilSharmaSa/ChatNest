import { Router } from "express";
import { getProfile, userLogin,userRegister } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/verifyJWT.js";
const userRouter=Router()

userRouter.post('/login',userLogin)
userRouter.post('/register',userRegister)
userRouter.get('/getProfile',verifyJWT,getProfile)












export default userRouter