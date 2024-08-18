// src/context/AppContext.js
import React, { createContext, useState } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
    const [state, setState] = useState({
        user: null,
    });

    const login = (user) => {
        setState({ user });
    };

    const logout = () => {
        setState({ user: null });
    };

    return (
        <AppContext.Provider value={{ ...state, login, logout }}>
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
