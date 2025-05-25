import express from "express";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app=express()
app.use(express.json());
app.use(express.urlencoded({extended:true}))
app.use('/public', express.static('public'));
app.use('/api/v1/user', userRouter)
app.use(cookieParser())
app.use(cors())


export default app;