import { createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"
import axiosInstance from "../../../utils/axiosInstance.js";



export const loginThunk = createAsyncThunk("users/loginThunk", async ({username,password},{rejectWithValue}) => {
 try {
  console.log("hello")
  const response=await axiosInstance.post('/user/login',{username,password})
 console.log(response)
 toast.success("Login Success!!")
 return response.data
 } catch (error) {
  console.log(error)
return rejectWithValue("User Not Found!!")
 }
});
