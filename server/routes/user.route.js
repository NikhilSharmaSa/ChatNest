import { Router } from "express";
import { getProfile, userLogin,userLogout,userRegister,getAllUsers } from "../controllers/user.controller.js";
import verifyJWT from "../middlewares/verifyJWT.js";
import { sendMessage,recieveMessage } from "../controllers/message.controller.js";
const userRouter=Router()

userRouter.post('/login',userLogin)
userRouter.post('/register',userRegister)
userRouter.get('/getProfile',verifyJWT,getProfile)
userRouter.get('/logout',verifyJWT,userLogout)
userRouter.post('/sendMessage',verifyJWT,sendMessage)
userRouter.post('/recieveMessage',verifyJWT,recieveMessage)
userRouter.get('/getAllUsers',getAllUsers)











export default userRouter