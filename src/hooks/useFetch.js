import axios from "axios";
import { useState } from "react";

export const useFetch = () => {
    const [data, setData] = useState();

    function getData(url) {
        axios.get(url)
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }

    return [data, getData];
};
