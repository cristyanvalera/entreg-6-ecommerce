import { useSelector } from "react-redux";

export const CartPage = () => {
    const cart = useSelector(store => store.cart);
    console.log(cart);
    return (
        <div>CartPage</div>
    );
};
