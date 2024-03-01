import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cart.slice";
import { CartProducts } from "../components/CartPage/CartProducts";

export const CartPage = () => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    useEffect(() => dispatch(getCartThunk()), []);

    const getTotal = () => {
        return cart?.reduce((acc, item) => acc + (item.quantity * item.product.price), 0); 
    };

    return (
        <div>
            {
                cart?.map(item => (
                    <CartProducts key={item.id} product={item} />
                ))
            }

            <div>
                {
                    getTotal() !== 0
                        ? <h3>Total buy: $ {getTotal()}</h3>
                        : <p>No products in the shopping cart yet.</p>
                }
            </div>
        </div>
    );
};
