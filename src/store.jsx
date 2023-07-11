import { configureStore } from "@reduxjs/toolkit";
import productSlice from './slice/ProductSlice'
import CartSlice from "./slice/CartSlice";
const store=configureStore({
    reducer:{
     
        product:productSlice,
        cart:CartSlice,
    }
})
export default store;