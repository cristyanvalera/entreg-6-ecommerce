import { useDispatch } from 'react-redux';
import './styles/cartProducts.css';
import { deleteCartThunk, updateCartThunk } from '../../store/slices/cart.slice';

export const CartProducts = ({ product }) => {
    const dispatch = useDispatch();
    
    const handleRemove = () => {
        dispatch(deleteCartThunk(product.id));
    };

    const handleLess = () => {
        if (product.quantity > 1) {
            dispatch(updateCartThunk(product, -1));
        }
    };

    const handleMore = () => {
        dispatch(updateCartThunk(product, 1));
    };

    return (
        product.product &&
            <div className="cartProduct">
                <figure>
                    <img src={product.product.images[0].url} alt="product image" />
                </figure>

                <div>
                    <h2>{product.product.title}</h2>

                    <button onClick={handleLess}>-</button>

                    <span>{product.quantity}</span>
                    
                    <button onClick={handleMore}>+</button>

                    <h3>$ Total: {product.product.price * product.quantity}</h3>
                </div>

                <button onClick={handleRemove}>Delete</button>
            </div>
    );
};
