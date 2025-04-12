import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [jwt, setJwt] = useState(localStorage.getItem('jwtToken'));
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')));

  const login = (data) => {
    setJwt(data.jwtToken);
    setUser({
      username: data.username,
      roles: data.roles,
      id: data.userId,
      mobile: data.mobile,
    });
    localStorage.setItem('jwtToken', data.jwtToken);
    localStorage.setItem(
      'user',
      JSON.stringify({
        username: data.username,
        roles: data.roles,
        id: data.id,
        mobile: data.mobile,
      })
    );
  };

  const logout = () => {
    setJwt(null);
    setUser(null);
    localStorage.clear();
  };

  return (
    <AuthContext.Provider value={{ jwt, user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
