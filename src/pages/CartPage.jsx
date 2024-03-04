import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCartThunk, setCart } from "../store/slices/cart.slice";
import { CartProducts } from "../components/CartPage/CartProducts";
import { useAuth } from "../hooks/useAuth";
import { getToken } from "../utils/getToken";

export const CartPage = () => {
    const cart = useSelector(store => store.cart);
    const dispatch = useDispatch();
    const createBuy = useAuth();

    useEffect(() => dispatch(getCartThunk()), []);

    const handleTotal = () => {
        return cart?.reduce((acc, item) => acc + (item.quantity * item.product.price), 0);
    };

    const handleBuy = () => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';

        createBuy(url, '', getToken());

        dispatch(setCart([]));
    };

    return (
        <div>
            {
                cart?.map(item => (
                    <CartProducts key={item.id} item={item} />
                ))
            }

            <div>
                {
                    handleTotal() !== 0 ?
                        <>
                            <h3>Total buy: $ {handleTotal()}</h3>

                            <button onClick={handleBuy}>Buy</button>
                        </>
                        : <p>No products found in the shopping cart.</p>
                }
            </div>
        </div>
    );
};
