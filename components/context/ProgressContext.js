import { useState, createContext, useContext, useEffect } from 'react';
import { useAuth } from '@/components/context/AuthContext';
import { dataSeparator } from '@/components/utils/dataExtractor';

const ProgressContext = createContext();

const useProgress = () => {
  return useContext(ProgressContext);
}

const ProgressProvider = ({ children }) => {
  const [chapter1Progress, setChapter1Progress] = useState([]);
  const [chapter2Progress, setChapter2Progress] = useState([]);
  const [chapter3Progress, setChapter3Progress] = useState([]);

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
    userProgress.then((data) => {
      setChapter1Progress(dataSeparator(data, 'chapter1'));
      setChapter2Progress(dataSeparator(data, 'chapter2'));
      setChapter3Progress(dataSeparator(data, 'chapter3'));

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