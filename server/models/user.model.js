import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
    },
    fullname: {
      type: String,
      required: true,
      unique:false
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    gender: {
      type: String,
      required: true,
    },
    avatar: {
      type: String,
      required: true,
    },
    accesstoken:{
      type:String,
      default:null
    },
     refreshtoken:{
      type:String,
      default:null
    }
  },
  { timestamps: true }
);


export default mongoose.model("User",userSchema)