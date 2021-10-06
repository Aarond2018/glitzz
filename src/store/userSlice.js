import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uID: '',
  name: '',
  email: '',
  cart: [],
  record: '',
  isSignnedIn: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      /* const data = document.cookie.split('; ').find(row => row.startsWith('userData=')).split('=')[1];
      const parsedData = JSON.parse(data) */
      
      state.isSignnedIn = true
      state.uID = action.payload.uID
      state.name = action.payload.name
      state.email = action.payload.email
      state.cart = action.payload.cart
      state.record = action.payload.record
    },
    signOut: (state) => {
      state.isSignnedIn = false
    },
    addToCart: (state, action) => {
      if (state.cart.some(obj=>obj.id === action.payload.id)){
        return
      }else{
        state.cart.push(action.payload)}
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
    }
  }
})

export const userActions = userSlice.actions;
export default userSlice;