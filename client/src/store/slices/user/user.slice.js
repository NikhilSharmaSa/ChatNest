import { createSlice } from "@reduxjs/toolkit";
import { loginThunk, registerThunk } from "./user.thunk.js";



const userSlice=createSlice({
    name:'user',
    initialState:{
        isAuthenticated:false
    },
    reducers:{

    },
    extraReducers: (builder) => {
      //Login User
        builder.addCase(loginThunk.pending, (state, action) => {
           console.log("pending")
          })
          builder.addCase(loginThunk.fulfilled, (state, action) => {
            console.log("fulfilled")
          })
        builder.addCase(loginThunk.rejected, (state, action) => {
        console.log("Rejected")
        })

        // Register User
         builder.addCase(registerThunk.pending, (state, action) => {
           console.log("pending")
          })
          builder.addCase(registerThunk.fulfilled, (state, action) => {
            console.log("fulfilled")
          })
        builder.addCase(registerThunk.rejected, (state, action) => {
        console.log("Rejected")
        })

      },
})


export const {}=userSlice.actions;
export default userSlice.reducer