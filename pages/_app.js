import '../styles/globals.css';
import AuthProvider from '../components/context/AuthContext';
import ProtectedRoutes from '../components/ProtectedRoutes';

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <ProtectedRoutes>
        <Component {...pageProps} />
      </ProtectedRoutes>
    </AuthProvider>
  )
}

export default MyApp
