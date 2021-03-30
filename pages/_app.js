import '../styles/globals.css';
import AuthProvider from '@/components/context/AuthContext';
import ProtectedRoutes from '@/components/ProtectedRoutes';
import ProgressProvider from '@/components/context/ProgressContext';

function MyApp({ Component, pageProps }) {

  return (
    <AuthProvider>
      <ProgressProvider>
        <ProtectedRoutes>
          <Component {...pageProps} />
        </ProtectedRoutes>
      </ProgressProvider>
    </AuthProvider>
  )
}

export default MyApp
