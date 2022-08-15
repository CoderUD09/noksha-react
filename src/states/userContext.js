import React, { createContext, useState, useEffect } from "react";

export const UserContext = createContext({});

export const UserContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [selectedSubCat, setselectedSubCat] = useState();

    const context = {
        user,
        setUser,
    };

    const loadUserData = async () => {
        const token = localStorage.getItem("token");
        console.log(token);
        if (token) {
            const settings = {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ token: token }),
            };
            const response = await fetch(`${process.env.REACT_APP_BASE_API_URL}/user/me`, settings);
            const data = await response.json();
            // console.log(data);
            // const res = await fetch(`${process.env.REACT_APP_BASE_API_URL}/user/me`, {
            //     method: 'POST',
            //     body: { token },
            // });
            setUser(data.user);
        }
    };

    useEffect(() => {
        loadUserData();
    }, []);

    return (<UserContext.Provider value={context}>{children}</UserContext.Provider>);
};
