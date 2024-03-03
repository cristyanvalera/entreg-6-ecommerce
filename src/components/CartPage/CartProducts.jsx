import { useDispatch } from 'react-redux';
import './styles/cartProducts.css';
import { deleteCartThunk, updateCartThunk } from '../../store/slices/cart.slice';

export const CartProducts = ({ item }) => {
    const dispatch = useDispatch();
    
    const handleRemove = () => {
        dispatch(deleteCartThunk(item.id));
    };

    const handleLess = () => {
        if (item.quantity > 1) {
            dispatch(updateCartThunk(item, -1));
        }
    };

    const handleMore = () => {
        dispatch(updateCartThunk(item, 1));
    };

    return (
        item.product &&
            <div className="cartProduct">
                <figure>
                    <img src={item.product.images[0].url} alt="product image" />
                </figure>

                <div>
                    <h2>{item.product.title}</h2>

                    <button onClick={handleLess}>-</button>

                    <span>{item.quantity}</span>
                    
                    <button onClick={handleMore}>+</button>

                    <h3>$ Total: {item.product.price * item.quantity}</h3>
                </div>

                <button onClick={handleRemove}>Delete</button>
            </div>
    );
};
