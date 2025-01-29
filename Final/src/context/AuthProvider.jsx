import React, { useState } from 'react';
import AuthContext from './AuthContext';

function AuthProvider({ children }) {
  const [token, setToken] = useState(localStorage.getItem('token'));
  const [loggedUserEmail, setLoggedUserEmail] = useState(
    localStorage.getItem('loggedUserEmail')
  );

  const isLoggedIn = !!token;

  // Functions to handle login and logout
  const handleLogin = (token, email) => {
    setToken(token);
    localStorage.setItem('token', token);
    setLoggedUserEmail(email);
    localStorage.setItem('loggedUserEmail', email);
  };

  const handleLogout = () => {
    setToken(null);
    localStorage.removeItem('token');
    localStorage.removeItem('loggedUserEmail');
  };

  // Provide values to the context
  const ctxValue = {
    token: token,
    email: loggedUserEmail,
    isLoggedIn: isLoggedIn,
    login: handleLogin,
    logout: handleLogout,
  };

  return (
    <AuthContext.Provider value={ctxValue}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
