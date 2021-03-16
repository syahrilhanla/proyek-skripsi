import React, { useState, createContext, useContext, useEffect } from 'react';
import { setLocalUser, getLocalUser, removeLocalUser } from '../utils/userSavings';
import { popup, auth } from '../Firebase';
import { useRouter } from 'next/router';

export const AuthContext = createContext();

export const useAuth = () => {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const router = useRouter();

  // set user after login success
  const setUser = async (user) => {
    if (user) {
      await setLocalUser(user);
      const localUser = await getLocalUser(user);
      await setCurrentUser(localUser);
      console.log(user);
      console.log(currentUser);
      router.push('/dashboard');
    } else console.log('no users');
  }

  const login = () => {
    // fires when user clicks login button from Home
    popup();
  }

  const signOut = () => {
    auth.signOut();
    removeLocalUser();
    console.log('signing out');
    router.push('/');
  }

  useEffect(() => {
    const unSub = auth.onAuthStateChanged(user => {
      setUser(user);
    });

    return unSub;
  }, []);

  return (
    <AuthContext.Provider value={{
      currentUser: { currentUser },
      login,
      signOut
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
