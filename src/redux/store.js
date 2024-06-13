import { configureStore } from "@reduxjs/toolkit";

import cartItemsReducer from "./itemsTracker/cartItemsReducer";
import inCartItemsReducer from "./itemsTracker/inCartItemsReducer";

export const store = configureStore({
    reducer: {
        cartCount: cartItemsReducer,
        inCartItems: inCartItemsReducer,
    },
})