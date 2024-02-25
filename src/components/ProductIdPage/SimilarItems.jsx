import { useEffect } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ProductCard } from "../HomePage/ProductCard";

export const SimilarItems = ({ categoryId, prodId }) => {
    const [productsByCategory, getProductsByCategory] = useFetch();

    useEffect(() => {
        if (categoryId) {
            let url = `https://e-commerce-api-v2.academlo.tech/api/v1/products?categoryId=${categoryId}`;

            getProductsByCategory(url);
        }
    }, [categoryId]);

    return (
        <section>
            <h2>Discover similar items</h2>

            <div className="product-container">
                {productsByCategory
                    ?.filter(prod => prod.id !== +prodId)
                    ?.map(product => (
                        <ProductCard key={product.id} prod={product} />
                    ))}
            </div>
        </section>
    );
};
