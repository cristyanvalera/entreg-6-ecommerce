import { useNavigate } from 'react-router-dom';
import './styles/productCard.css';

export const ProductCard = ({ prod }) => {
    const navigate = useNavigate();

    const handleView = () => navigate(`/product/${prod.id}`);
    
    return (
        <article className="product-card">
            <figure className='productCard-img' onClick={handleView}>
                <img src={prod.images[0].url} alt="product image" />
                <img src={prod.images[1].url} alt="product image" />
            </figure>

            <hr />
            
            <div className='productCard-info'>
                <ul>
                    <li>
                        <span>{prod.brand}</span>
                        <span>{prod.title}</span>
                    </li>

                    <li>
                        <span>Price</span>
                        <span>$ {prod.price}</span>
                    </li>
                </ul>
            </div>
            
            <div className='product-btns'>
                <button>Add to cart</button>
                
                <button onClick={handleView}>
                    View more
                </button>
            </div>
        </article>
    );
};
