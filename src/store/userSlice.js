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
      if (state.cart?.some(obj=>obj.id === action.payload.id)){
        return
      }else{
        state.cart.push(action.payload)
        localStorage.setItem("cart", JSON.stringify(state.cart))
      }
    },
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter(item => item.id !== action.payload)
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    reformatCart: (state, action) => {
      state.cart = action.payload
    },
    increaseQuantity: (state, action) => {
      state.cart.find(cItem => cItem.id === action.payload).quantity++
      localStorage.setItem("cart", JSON.stringify(state.cart))
    },
    decreaseQuantity: (state, action) => {
      !(state.cart.find(cItem => cItem.id === action.payload).quantity <= 1) ? state.cart.find(cItem => cItem.id === action.payload).quantity-- : state.cart.find(cItem => cItem.id === action.payload).quantity = 1
      localStorage.setItem("cart", JSON.stringify(state.cart))
    }
  }
})

export const userActions = userSlice.actions;
export default userSlice;