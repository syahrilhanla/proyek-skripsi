import { useEffect } from 'react';
import { useAuth } from '../components/context/AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoutes = ({ children }) => {

  const router = useRouter();
  const { localUserData } = useAuth();

  useEffect(() => {
    if (!localUserData && window.location.pathname !== '/') {
      router.push('/');
      console.log('no user')
    } else if (localUserData && window.location.pathname === '/') {
      router.push('/dashboard');
      // console.log('there is a user');
    }
  }, [localUserData]);

  return children;
}

export default ProtectedRoutes;