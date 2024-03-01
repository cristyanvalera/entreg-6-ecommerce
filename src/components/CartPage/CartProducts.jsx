import { useDispatch } from 'react-redux';
import './styles/cartProducts.css';
import { deleteCartThunk } from '../../store/slices/cart.slice';

export const CartProducts = ({ product }) => {
    const dispatch = useDispatch();
    
    const handleRemove = () => {
        dispatch(deleteCartThunk(product.id));
    };

    return (
        product.product &&
            <div className="cartProduct">
                <figure>
                    <img src={product.product.images[0].url} alt="product image" />
                </figure>

                <div>
                    <h2>{product.product.title}</h2>

                    <button>-</button>
                    <span>{product.quantity}</span>
                    <button>+</button>

                    <h3>$ {product.product.price}</h3>
                </div>

                <button onClick={handleRemove}>Delete</button>
            </div>
    );
};
