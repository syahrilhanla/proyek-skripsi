import { createContext, useContext } from 'react';
import { useAuth } from '@/components/context/AuthContext';

const ProgressContext = createContext();

const useProgress = () => {
  return useContext(ProgressContext);
}

const ProgressProvider = ({ children }) => {
  const { userProgress } = useAuth();

  /*
    EXPECTED OUTPUT of userProgress:
    [
      { chapter: chapter(n),
        data: [
          {
            page1: [act1: Boolean, ... act(n): Boolean]
          },  
          {
            page(n): [act1: Boolean, ... act(n): Boolean]
          }
        ]
      }
    ]
  */
  console.log(userProgress);

  // const chapter1Progress = userProgress.filter(chapter => chapter.)

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