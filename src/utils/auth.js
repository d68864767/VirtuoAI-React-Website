src/utils/auth.js

import { useState, useEffect } from 'react';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is authenticated
    const checkAuth = () => {
      // Your authentication logic here
      // e.g., check if user is logged in or has valid token
      const isAuthenticated = /* Your authentication check */;
      setIsAuthenticated(isAuthenticated);

      // Fetch user data if authenticated
      if (isAuthenticated) {
        const userData = /* Fetch user data */;
        setUser(userData);
      }
    };

    checkAuth();
  }, []);

  const login = (credentials) => {
    // Your login logic here
    // e.g., authenticate user with credentials
    const isAuthenticated = /* Your login logic */;
    setIsAuthenticated(isAuthenticated);

    // Fetch user data if authenticated
    if (isAuthenticated) {
      const userData = /* Fetch user data */;
      setUser(userData);
    }
  };

  const logout = () => {
    // Your logout logic here
    // e.g., clear authentication token and user data
    /* Your logout logic */

    setIsAuthenticated(false);
    setUser(null);
  };

  return { isAuthenticated, user, login, logout };
};

export default useAuth;
