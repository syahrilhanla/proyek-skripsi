import { useEffect } from 'react';
import { useAuth } from '../components/context/AuthContext';
import { useRouter } from 'next/router';

const ProtectedRoutes = ({ children }) => {

  const router = useRouter();
  const { localUserData } = useAuth();

  const publicLinks = ['/about', '/'];
  const currentLink = router.pathname;

  useEffect(() => {
    if (!localUserData && currentLink.includes(publicLinks)) {
      router.push('/');
      console.log('no user')
    } else if (localUserData && currentLink === '/') {
      router.push('/dashboard');
      // console.log('there is a user');
    }
  });

  return children;
}

export default ProtectedRoutes;