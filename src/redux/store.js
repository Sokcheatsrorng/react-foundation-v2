import { configureStore } from "@reduxjs/toolkit";
import {counterSlice} from './features/counter/counterSlice'
import { cartSlice } from "./features/cart/cartSlice";
// import { productApi } from "./services/productApi/productApi";
// import { login } from "./services/auth/login";
import { baseApi } from "./baseApi";
// set up store 
export const store = configureStore({
//    store always has reducer
  reducer: {
    counter: counterSlice.reducer,
    cart: cartSlice.reducer,
    // [productApi.reducerPath]: productApi.reducer,
    // [login.reducerPath]: login.reducer
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(baseApi.middleware),
  devTools: true
})