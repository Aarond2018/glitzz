import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  uID: '',
  name: '',
  email: '',
  cart: '',
  record: '',
  isSignnedIn: false
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.isSignnedIn = true
      state.uID = action.payload.uID
      state.name = action.payload.name
      state.email = action.payload.email
      state.cart = action.payload.cart
      state.record = action.payload.record
    },
    signOut: (state) => {
      state.isSignnedIn = false
    }
  }
})

export const userActions = userSlice.actions;
export default userSlice;