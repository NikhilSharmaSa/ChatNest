import { createSlice } from "@reduxjs/toolkit";
import { loginThunk } from "./user.thunk.js";



const userSlice=createSlice({
    name:'user',
    initialState:{
        isAuthenticated:false
    },
    reducers:{

    },
    extraReducers: (builder) => {
        builder.addCase(loginThunk.pending, (state, action) => {
           console.log("pending")
          })
          builder.addCase(loginThunk.fulfilled, (state, action) => {
            console.log("fulfilled")
          })
        builder.addCase(loginThunk.rejected, (state, action) => {
        console.log("Rejected")
        })
      },
})


export const {}=userSlice.actions;
export default userSlice.reducer