import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../slices/CartSliceE";

 const estore = configureStore({
    reducer:{
        cart: cartSlice.reducer,
    }
});

export default estore;