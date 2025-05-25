import { Router } from "express";
import { userLogin } from "../controllers/user.controller.js";

const userRouter=Router()

userRouter.get('/login',userLogin)












export default userRouter