import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './features/counter/counterSlice'
import { cartSlice } from "./features/cart/cartSlice";
import { productApi } from "./services/productApi/productApi";
// set up store 
export const store = configureStore({
//    store always has reducer
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    [productApi.reducerPath]: productApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productApi.middleware)
})