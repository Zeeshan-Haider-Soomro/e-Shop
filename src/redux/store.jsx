import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./CartSlice";
import productSlice from "./ProductSlice";


export const store = configureStore({
    reducer: {
        cart : cartSlice,
        product : productSlice,
    }
})