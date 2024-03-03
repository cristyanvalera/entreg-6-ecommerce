import { useEffect } from "react";
import { useFetch } from "../hooks/useFetch";
import { getToken } from "../utils/getToken";

export const PurchasesPage = () => {
    const [purchases, getPurchases] = useFetch();
    
    useEffect(() => {
        const url = 'https://e-commerce-api-v2.academlo.tech/api/v1/purchases';

        getPurchases(url, getToken());
    }, []);

    console.log(purchases);

    return (
        <div>
            
        </div>
    );
};
