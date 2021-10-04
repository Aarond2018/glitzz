import { configureStore } from '@reduxjs/toolkit'
import productSlice from './productSlice'
import userSlice from './userSlice'

const store = configureStore({
  reducer: {
    products: productSlice.reducer,
    users: userSlice.reducer
  }
})

export default store;