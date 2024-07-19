import { configureStore } from "@reduxjs/toolkit";

import cartItemsReducer from "./itemsTracker/cartItemsReducer";
import productsSlice from "./itemsTracker/productsSlice";
import wishlistReducer from "./wishlistTracker/wishlistReducer";

export const store = configureStore({
    reducer: {
        cartCount: cartItemsReducer,
        products: productsSlice,
        wishlist: wishlistReducer,
    },
})