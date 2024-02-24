import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { ProductCard } from "../components/HomePage/ProductCard";
import './styles/homePage.css';

export const HomePage = () => {
    const [productName, setProductName] = useState('');
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();
    const search = useRef();

    useEffect(() => {
        let url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
        dispatch(getProductsThunk(url));
    }, []);

    const handleSearch = () => {
        setProductName(search.current.value.toLowerCase().trim());
    };

    return (
        <div>
            <h1>Ecommerce</h1>

            <div>
                <input type="text" ref={search} onChange={handleSearch} />
            </div>

            <section className="product-container">
                {products
                    ?.filter((p) => p.title.toLowerCase().includes(productName))
                    .map(prod => (
                        <ProductCard key={prod.id} prod={prod} />
                    ))}
            </section>
        </div>
    );
};
