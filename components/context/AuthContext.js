import React, { useState, createContext, useContext, useEffect } from 'react'
import { popup, auth } from '../Firebase';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  const logging = () => console.log(1414);

  const login = () => {

    popup();
  }

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(user => {
      setCurrentUser(user);
    });

    console.log(currentUser)

    return unSub;
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser,
      login,
      logging
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
