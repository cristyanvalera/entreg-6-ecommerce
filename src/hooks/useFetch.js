import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
    const [data, setData] = useState();

    function getData(url, key = {}) {
        axios.get(url, key)
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }

    return [data, getData];
};
