import { createAsyncThunk } from "@reduxjs/toolkit";
import {toast} from "react-hot-toast"
import axiosInstance from "../../../utils/axiosInstance.js";



export const loginThunk = createAsyncThunk("user/loginThunk", async ({username,password},{rejectWithValue}) => {
 try {

  const response=await axiosInstance.post('/user/login',{username,password})
 console.log(response)
 toast.success("Login Success!!")
 return response.data
 } catch (error) {
  console.log("error:::::::::::::"+error.response.data.message)
  toast.error(error.response.data.message)
return rejectWithValue("User Not Found!!")
 }
});



export const registerThunk = createAsyncThunk("user/registerThunk", async ({username,password,fullname,gender,confirmPassword,email},{rejectWithValue}) => {
 try {

  const response=await axiosInstance.post('/user/register',{username,password,fullname,gender,confirmPassword,email})
 console.log(response)
 toast.success("Registration Success!!")
 return response.data
 } catch (error) {
  console.log("error:::::::::::::"+error.response.data.message)
  toast.error(error.response.data.message)
return rejectWithValue("User Not Register!!")
 }
});