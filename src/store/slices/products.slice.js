import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
    name: 'products',
    initialState: null,
    reducers: {
        setProducts: (currentValue, action) => action.payload,
    },
});

export const getProductsThunk = (url) => (dispatch) => {
    axios.get(url)
        .then(response => dispatch(setProducts(response.data)))
        .catch(error => console.log(error));
};

export const { setProducts } = productsSlice.actions;
export default productsSlice.reducer;