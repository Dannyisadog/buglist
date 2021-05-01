import { useState } from 'react';

const useToken = () => {
    const getToken = () => {
        const tokenString = sessionStorage.getItem('user_token');
        const userToken = JSON.parse(tokenString);
        return userToken ? userToken : null;
    };

    const [token, setToken] = useState(getToken());

    const saveToken = userToken => {
        sessionStorage.setItem('user_token', JSON.stringify(userToken));
        setToken(userToken.token);
    }

    return {
        setToken: saveToken,
        token: token
    }
};

export default useToken;