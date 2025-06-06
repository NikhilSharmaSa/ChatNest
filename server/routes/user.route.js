import { Router } from "express";
import { getProfile, userLogin,userLogout,userRegister,getAllUsers } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/verifyJWT.js";
import { sendMessage, getMessages } from "../controllers/message.controller.js";
const userRouter=Router()

userRouter.post('/login',userLogin)
userRouter.post('/register',userRegister)
userRouter.get('/getProfile',verifyJWT,getProfile)
userRouter.get('/logout',verifyJWT,userLogout)
userRouter.post('/sendMessage',verifyJWT,sendMessage)
userRouter.get('/getAllUsers',getAllUsers)
userRouter.post('/getMessages',verifyJWT,getMessages)











export default userRouter