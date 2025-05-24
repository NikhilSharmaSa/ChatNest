import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './slices/user/user.slice.js'
export const store = configureStore({
  reducer: {
    userReducer,

  },
})