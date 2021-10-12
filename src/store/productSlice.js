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

    },
    addReview: (state, action) => {
      state.data.find(item => item.id === action.payload.id).reviews.push({
        name: action.payload.name,
        rating: action.payload.rating,
        comment: action.payload.comment
      })
    }
  }
})

export const productActions = productSlice.actions;
export default productSlice;