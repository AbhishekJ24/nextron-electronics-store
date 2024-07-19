import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: []
};

export const wishlistReducer = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addWishlist: (state, action) => {
      const existingProduct = state.items.find(item => item.id === action.payload.id);
      if (!existingProduct) {
        state.items.push({ ...action.payload, quantity: action.payload.quantity || 1 });
      }
    },
    deleteWishlist: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});

export const { addWishlist, deleteWishlist } = wishlistReducer.actions;

export default wishlistReducer.reducer;