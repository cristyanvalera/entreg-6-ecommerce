import { useDispatch } from 'react-redux';
import './styles/cartProducts.css';
import { deleteCartThunk } from '../../store/slices/cart.slice';

export const CartProducts = ({ product }) => {
    const dispatch = useDispatch();

    let title = product.product.title;
    let quantity = product.product.quantity;
    let price = product.product.price;

    const handleRemove = () => {
        dispatch(deleteCartThunk(product.id));
    };

    return (
        <div className="cartProduct">
            <figure>
                <img src={product.product.images[0].url} alt="product image" />
            </figure>

            <div>
                <h2>{title}</h2>

                <button>-</button>
                <span>{quantity}</span>
                <button>+</button>
                
                <h3>$ {price}</h3>
            </div>

            <button onClick={handleRemove}>Delete</button>
        </div>
    );
};
