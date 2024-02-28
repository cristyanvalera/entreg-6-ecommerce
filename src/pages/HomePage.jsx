import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductsThunk } from "../store/slices/products.slice";
import { ProductCard } from "../components/HomePage/ProductCard";
import './styles/homePage.css';
import { SelectCategory } from "../components/HomePage/SelectCategory";
import { FormPrice } from "../components/HomePage/FormPrice";

export const HomePage = () => {
    const [productName, setProductName] = useState('');
    const [selectValue, setSelectValue] = useState(0);
    const [formValue, setFormValue] = useState({ from: 0, to: Infinity });
    const body = document.querySelector('body');

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

    const filterByTitle = (prod) => {
        const { from, to } = formValue;

        let byName = prod.title.toLowerCase().includes(productName);

        let byCategory = +selectValue === 0
            ? true
            : +selectValue === prod.categoryId;

        let byPrice = +prod.price >= +from && +prod.price <= +to;

        return byName && byCategory && byPrice;
    };

    const handleDark = () => {
        body.classList.toggle('dark');
    };

    return (
        <div>
            <div className="filter-container">
                <button onClick={handleDark}>Dark mode</button>

                <FormPrice setFormValue={setFormValue} />
                
                <div>
                    <h3>By Name</h3>

                    <input type="text" ref={search} onChange={handleSearch} />
                </div>
                
                <SelectCategory setSelectValue={setSelectValue} />
            </div>

            <section className="product-container">
                {
                    products?.filter(filterByTitle).map(prod => (
                        <ProductCard key={prod.id} prod={prod} />
                    ))
                }
            </section>
        </div>
    );
};
