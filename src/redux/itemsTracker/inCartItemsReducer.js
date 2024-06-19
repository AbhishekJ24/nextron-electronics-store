import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: []
};

export const inCartItemsReducer = createSlice({
    name: 'inCartItems',
    initialState,
    reducers: {
        addItemQuantity: (state, action)=>{
            
        },
        deleteItemQuantity: (state, action)=>{

        },
        

    }
});

export const {} = inCartItemsReducer.actions;
export default inCartItemsReducer.reducer;
