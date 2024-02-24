import { useEffect } from "react";
import { InfoProduct } from "../components/ProductIdPage/InfoProduct";
import { useFetch } from "../hooks/useFetch";
import { useParams } from "react-router-dom";
import { SimilarItems } from "../components/ProductIdPage/SimilarItems";

export const ProductIdPage = () => {
    const [productId, getProductId] = useFetch();
    const param = useParams();

    useEffect(() => {
        let url = `https://e-commerce-api-v2.academlo.tech/api/v1/products/${param.id}`;
        
        getProductId(url);
    }, [param]);
    
    return (
        <div>
            <h2>idProduct</h2>

            <InfoProduct productId={productId} />

            <SimilarItems
                categoryId={productId?.categoryId}
                prodId={param.id}
            />
        </div>
    )
};
