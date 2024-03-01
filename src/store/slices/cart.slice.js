import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { getToken } from "../../utils/getToken";
const urlBase = 'https://e-commerce-api-v2.academlo.tech/api/v1/cart';

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {
        addToCart: (currentValue, action) => [
            ...currentValue,
            action.payload,
        ],
        
        deleteFromCart: (currentValue, action) => {
           return  currentValue.filter(product => (
                product.id !== action.payload
            ));
        },
        
        setCart: (currentValue, action) => action.payload,
        
        updateCart: (currentValue, action) => {
            const { id, quantity } = action.payload;

            currentValue.map(product => (
                product.id === id
                    ? product.quantity = quantity
                    : product
            ))
        },
    },
});

export const { addToCart, deleteFromCart, setCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;

export const getCartThunk = () => (dispatch) => {
    axios.get(urlBase, getToken())
        .then(response => dispatch(setCart(response.data)))
        .catch(error => console.log(error));
};

export const postCartThunk = (data) => (dispatch) => {
    axios.post(urlBase, data, getToken())
        .then(response => dispatch(addToCart(response.data)))
        .catch(error => console.log(error));
};

export const deleteCartThunk = (id) => (dispatch) => {
    let url = `${urlBase}/${id}`;

    axios.delete(url, getToken())
        .then(response => {
            console.log('Item deleted', response.data);
            dispatch(deleteFromCart(id));
        })
        .catch(error => console.log(error));
};

export const updateCartThunk = (product, quantity) => (dispatch) => {
    const data = {
        quantity: product.quantity + quantity,
    };

    let url = `${urlBase}/${product.id}`;

    axios.put(url, data, getToken())
        .then(response => dispatch(updateCart(response.data)))
        .catch(error => console.log(error));
};