import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { ProductCard } from "../components/HomePage/ProductCard";

export const HomePage = () => {
    const products = useSelector(store => store.products);
    const dispatch = useDispatch();

    useEffect(() => {
        let url = 'https://e-commerce-api-v2.academlo.tech/api/v1/products';
        dispatch(getProductsThunk(url));
    }, []);

    return (
        <div>
            <h1>Ecommerce</h1>
            <section>
                {products?.map(prod => (
                    <ProductCard key={prod.id} prod={prod} />
                ))}
            </section>
        </div>
    );
};
