import dotenv from 'dotenv'
import { mongoDb_URI, } from '../constant.js';
dotenv.config()

import mongoose from "mongoose";

const connectDB=async()=>{

const connectionInstance= await mongoose.connect(`${mongoDb_URI}/${process.env.DBNAME}`)

console.log(connectionInstance.connection.host + "Db connected Succesfully!!")


}


export default connectDB