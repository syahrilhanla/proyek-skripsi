import { createContext, useContext, useEffect } from 'react';
import { useAuth } from '@/components/context/AuthContext';
import { dataSeparator } from '@/components/utils/dataExtractor';

const ProgressContext = createContext();

const useProgress = () => {
  return useContext(ProgressContext);
}

const ProgressProvider = ({ children }) => {

  // userProgress is a promise, so use .then() and .catch()
  // can't use async await because this root function is used to render globally
  // so it should not be a promise
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

  // getting the value of the promise, then separate them to each array
  // setting them to localState
  useEffect(() => {
    // this also checked in when logging out, and the data will be null
    userProgress.then((data) => {

      // if no data or logged out, then exit function immediately;
      if (!data) return;

      const chapter1Progress = (dataSeparator(data, 'chapter1'));
      const chapter2Progress = (dataSeparator(data, 'chapter2'));
      const chapter3Progress = (dataSeparator(data, 'chapter3'));

      const countProgress = (chapterProgress) => {
        chapterProgress.map(item => {
          item.data.map(unit => console.log(unit))
        })
      };

      countProgress(chapter1Progress);

      console.log(chapter1Progress, chapter2Progress, chapter3Progress);
    });
  }, [userProgress]);

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