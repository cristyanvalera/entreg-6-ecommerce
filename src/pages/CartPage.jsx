import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk } from "../store/slices/cart.slice";
import { CartProducts } from "../components/CartPage/CartProducts";

export const CartPage = () => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCartThunk());
    }, []);

    console.log(cart);

    return (
        <div>
            {
                cart?.map(item => (
                    <CartProducts key={item.id} product={item} />
                ))
            }
        </div>
    );
};
