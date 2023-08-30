import { configureStore } from '@reduxjs/toolkit'
import  counterSlice  from '../redux/settingsSlice'
export const store = configureStore({
  reducer: {
    counter: counterSlice,
  },
})