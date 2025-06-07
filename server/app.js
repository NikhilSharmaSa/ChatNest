import express from "express";
import userRouter from "./routes/user.route.js";
import cookieParser from "cookie-parser";
import cors from 'cors'
const app=express()
app.use(cors(
{

    origin:[`http://localhost:5173`],
    credentials:true

}
))
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))
app.use('/public', express.static('public'));




app.use('/api/v1/user', userRouter)

export default app;