import axios from "axios";

export const useAuth = () => {
    const authApi = (url, data, key = {}) => {
        axios.post(url, data, key)
            .then(response => {
                if ('token' in response.data) {
                    localStorage.setItem('token', response.data.token);
                }
            })
            .catch(error => console.log(error));
    };
    
    return authApi;
};
