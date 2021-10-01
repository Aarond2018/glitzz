import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  data: []
}

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data = action.payload
    },
    delete: (state) => {

    }
  }
})

export const productActions = productSlice.actions;
export default productSlice;