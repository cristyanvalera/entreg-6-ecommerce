import { useState } from "react";
import { postCartThunk } from "../../store/slices/cart.slice";
import { useDispatch } from "react-redux";

export const InfoProduct = ({ productId }) => {
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleLess = () => {
        if (quantity > 1) {
            setQuantity(quantity - 1);
        }
    };

    const handlePlus = () => setQuantity(quantity + 1);

    const handleAddToCart = () => {
        dispatch(postCartThunk({
            quantity: quantity,
            productId: productId.id,
        }));
    };

    console.log(productId);

    return (
        <div>
            <div>
                <h2 className="product-title">
                    {productId?.brand}
                </h2>
                
                <h3 className="product-title">
                    {productId?.title}
                </h3>
                
                <p className="product-description">
                    {productId?.description}
                </p>
            </div>

            <div>
                <ul>
                    <li>Price</li>
                    <li>$ {productId?.price}</li>
                </ul>

                <div>
                    <p>Quantity</p>
                    <button onClick={handleLess}>
                        -
                    </button>

                    <span>{quantity}</span>

                    <button onClick={handlePlus}>
                        +
                    </button>
                </div>
            </div>

            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    );
};
