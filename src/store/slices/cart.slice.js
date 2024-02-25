import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        setCart: (currentValue, action) => action.payload,
    },
});

export const { setCart } = cartSlice.actions;
export default cartSlice.reducer;