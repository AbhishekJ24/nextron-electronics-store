import { configureStore } from "@reduxjs/toolkit";

import cartItemsReducer from "./itemsTracker/cartItemsReducer";

export const store = configureStore({
    reducer: {
        cartCount: cartItemsReducer
    },
})