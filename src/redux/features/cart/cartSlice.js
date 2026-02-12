import { createSlice } from "@reduxjs/toolkit";

// initialize product 
const initialState = {
    product: [],
    totalPrice: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action) => {
            state.product.push(action.payload)
            state.totalPrice += action.payload.price
        },
        removeFromCart: (state, action) =>{
              state.product.pop(action?.payload.product)
              const currentTotalPrice = action.payload.price || 0; 
              state.totalPrice -= currentTotalPrice;
        }
    } 
})

export const {
    addToCart,
    removeFromCart
} = cartSlice.actions;

export default cartSlice.reducer;