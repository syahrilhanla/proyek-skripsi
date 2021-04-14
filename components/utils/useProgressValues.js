import { useState, useEffect } from "react";
import { combinePageProgress, getScore } from "@/components/utils/dataProcessors";
import { getLocalUserProgress } from '@/components/utils/userLocalSavings';

import { useAuth } from "@/components/context/AuthContext";

const useProgressValues = () => {

  const { localUserData } = useAuth();

  const [chapter1Value, setChapter1Value] = useState(0);
  const [chapter2Value, setChapter2Value] = useState(0);
  const [chapter3Value, setChapter3Value] = useState(0);

  const setProgressValues = () => {
    return { chapter1Value, chapter2Value, chapter3Value, }
  }

  const setUserProgress = () => {
    const chapter1Progress = combinePageProgress(getLocalUserProgress('chapter1'));
    const chapter2Progress = combinePageProgress(getLocalUserProgress('chapter2'));
    const chapter3Progress = combinePageProgress(getLocalUserProgress('chapter3'));

    setChapter1Value(getScore(chapter1Progress.combinedProgress));
    setChapter2Value(getScore(chapter2Progress.combinedProgress));
    setChapter3Value(getScore(chapter3Progress.combinedProgress));
  }

  useEffect(() => {
    setUserProgress();
  }, []);

  return { localUserData, setProgressValues }
}

export default useProgressValues;