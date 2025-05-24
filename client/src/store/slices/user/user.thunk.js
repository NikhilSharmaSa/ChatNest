import { createAsyncThunk } from "@reduxjs/toolkit"



 export const loginThunk = createAsyncThunk(
    'users/loginThunk',
    async () => {
     console.log("Hello")
    },
  )