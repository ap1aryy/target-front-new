// UserContext.js
import React, { createContext, useState } from 'react';
import axios from 'axios';
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [user, setUser] = useState({
    });

    return (
        <UserContext.Provider value={{ user, setUser  }}>
            {children}
        </UserContext.Provider>
    );
};
