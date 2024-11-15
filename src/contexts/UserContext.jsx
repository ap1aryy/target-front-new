// UserContext.js
import React, { createContext, useState } from "react";
import axios from "axios";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [initData, setInitData] = useState();

  return (
    <UserContext.Provider value={{ user, setUser, initData, setInitData }}>
      {children}
    </UserContext.Provider>
  );
};
