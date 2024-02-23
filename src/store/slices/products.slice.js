import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (currentValue, action) => action.payload,
    },
});

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;