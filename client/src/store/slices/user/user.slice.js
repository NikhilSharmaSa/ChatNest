import { createSlice } from "@reduxjs/toolkit";
import { fetchProfileThunk, fetchUserThunk, loginThunk, logoutThunk, registerThunk } from "./user.thunk.js";



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


        // fetch User
         builder.addCase(fetchUserThunk.pending, (state, action) => {
           console.log("pending")
          })
          builder.addCase(fetchUserThunk.fulfilled, (state, action) => {
            console.log("fulfilled")
          })
        builder.addCase(fetchUserThunk.rejected, (state, action) => {
        console.log("Rejected")
        })


         // logout User
         builder.addCase(logoutThunk.pending, (state, action) => {
           console.log("pending")
          })
          builder.addCase(logoutThunk.fulfilled, (state, action) => {
            console.log("fulfilled")
          })
        builder.addCase(logoutThunk.rejected, (state, action) => {
        console.log("Rejected")
        })

        // fetch User
         builder.addCase(fetchProfileThunk.pending, (state, action) => {
           console.log("pending")
          })
          builder.addCase(fetchProfileThunk.fulfilled, (state, action) => {
            console.log("fulfilled")
          })
        builder.addCase(fetchProfileThunk.rejected, (state, action) => {
        console.log("Rejected")
        })
      },
})


export const {}=userSlice.actions;
export default userSlice.reducer