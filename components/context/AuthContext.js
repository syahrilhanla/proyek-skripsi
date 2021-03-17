import React, { useState, createContext, useContext, useEffect } from 'react';
import { setLocalStorage, getLocalUser, removeLocalUser } from '../utils/userSavings';
import { popup, auth } from '../Firebase';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [localUserData, setLocalUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // set user after login success
  const setUser = async (user) => {
    if (user) {
      setCurrentUser(user);
      console.log(user);
    } else console.log('no users');
  }

  const login = async () => {
    // fires when user clicks login button from Home
    await popup();
  }

  const signOut = async () => {
    await auth.signOut();
    await removeLocalUser();
    console.log('signing out');
    setLoading(true);
    router.push('/')
  }

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(user => {
      setUser(user).then(() => {
        try {
          setCurrentUser(user);
          setLocalStorage(user).then(() => {
            // get local user from localStorage after login and set to localStorage
            getLocalUser().then(data => {
              setLocalUserData(data);
              setLoading(false);
            });
          })
        } catch (error) {
          console.log(`failed to set user`);
        }
      });
    });

    console.log(loading);

    return unSub;
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser,
      localUserData,
      loading,
      login,
      signOut
    }}>
      {!loading && children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
