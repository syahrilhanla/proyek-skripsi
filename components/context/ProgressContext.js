import { createContext, useContext } from 'react';
import { useAuth } from '@/components/context/AuthContext';

const ProgressContext = createContext();

const useProgress = () => {
  return useContext(ProgressContext);
}

const ProgressProvider = ({ children }) => {
  const { userProgress } = useAuth();

  console.log(userProgress);

  const value = {
    useProgress,
    userProgress
  }

  return (
    <ProgressContext.Provider value={{ value }}>
      {children}
    </ProgressContext.Provider>
  )
}

export default ProgressProvider;