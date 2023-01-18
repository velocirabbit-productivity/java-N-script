import React, { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({ loggedInUser: null, setLoggedInUser: null, logout: null });

export const AuthProvider = ({ children }) => {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const logout = () => {
    console.log('logging out!!!');
  };

  useEffect(() => {
  });

  return (
    <AuthContext.Provider value={{ loggedInUser, setLoggedInUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
