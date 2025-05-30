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
  },
  { timestamps: true }
);


export default mongoose.model("User",userSchema)