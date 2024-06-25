import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [],
  totalAmount: 0
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
      state.totalAmount += (action.payload.price * action.payload.quantity);
    },
    deleteProduct: (state, action) => {
      const deletedProduct = state.products.find(product => product.id === action.payload);
      if (deletedProduct) {
        state.products = state.products.filter(product => product.id !== action.payload);
        state.totalAmount -= (deletedProduct.price * deletedProduct.quantity);
      }
    },
  },
});

export const { addProduct, deleteProduct } = productsSlice.actions;

export default productsSlice.reducer;
