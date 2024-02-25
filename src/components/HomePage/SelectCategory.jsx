import { useEffect, useRef } from "react";
import { useFetch } from "../../hooks/useFetch";

export const SelectCategory = ({ setSelectValue }) => {
    const [categories, getCategories] = useFetch();
    const textSelect = useRef();

    useEffect(() => {
        let url = 'https://e-commerce-api-v2.academlo.tech/api/v1/categories';

        getCategories(url);
    }, []);

    const handleCategory = () => {
        setSelectValue(textSelect.current.value);
    };

    return (
        <select onChange={handleCategory} ref={textSelect}>
            <option value={0}>All</option>
            {
                categories?.map(category => (
                    <option key={category.id} value={category.id}>
                        {category.name}
                    </option>
                ))
            }
        </select>
    );
};
