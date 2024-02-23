import { configureStore } from "@reduxjs/toolkit";
import products from "./slices/products.slice";

export const store = configureStore({
    reducer: { products },
});