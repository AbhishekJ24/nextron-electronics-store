import { configureStore } from "@reduxjs/toolkit";

import cartItemsReducer from "./itemsTracker/cartItemsReducer";
import productsSlice from "./itemsTracker/productsSlice";
import productsReducer from "./productsStore/productsReducer";

export const store = configureStore({
    reducer: {
        cartCount: cartItemsReducer,
        products: productsSlice,
        allProducts: productsReducer
    },
})