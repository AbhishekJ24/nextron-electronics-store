import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    allProducts: [],
};

export const productsReducer = createSlice({
  name: 'allProducts',
  initialState,
  reducers: {
    addProduct: (state, action) => {
      state.allProducts.push(action.payload);
    },
    setProducts: (state, action) => {
      state.allProducts = action.payload;
    },
  },
});

export const { addProduct, setProducts } = productsReducer.actions;

export default productsReducer.reducer;
