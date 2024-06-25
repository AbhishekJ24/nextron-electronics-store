import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
};

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      const existingProduct = state.products.find(product => product.id === action.payload.id);
      if (existingProduct) {
        existingProduct.quantity += action.payload.quantity;
      } else {
        state.products.push({ ...action.payload, quantity: action.payload.quantity });
      }
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter((product) => product.id !== action.payload);
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
