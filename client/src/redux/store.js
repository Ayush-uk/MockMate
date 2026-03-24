import { configureStore } from '@reduxjs/toolkit'
import userSlice from './userSclice';

export default configureStore({
  reducer: {
    user:userSlice
  }
})