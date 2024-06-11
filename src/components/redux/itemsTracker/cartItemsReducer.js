import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0
}

export const cartItemsReducer = createSlice({
  name: 'cartCount',
  initialState,
  reducers: {
    addItems: (state) => {
      state.value += 1
    },
    addItemsByNumber: (state, action) => {
      state.value += action.payload
    }
  }
})

export const { addItems, addItemsByNumber } = cartItemsReducer.actions
export default cartItemsReducer.reducer