import { useState, useEffect } from "react";
<<<<<<< HEAD

import {
	combinePageProgress,
	getScore,
} from "@/components/utils/dataProcessors";
import { getLocalUserProgress } from "@/components/utils/userLocalSavings";
=======
import { combinePageProgress, getScore } from "@/components/utils/dataProcessors";
import { getLocalUserProgress } from '@/components/utils/userLocalSavings';
>>>>>>> 36b6b4b608bdea223f175814247441ce22cfae2c

import { useAuth } from "@/components/context/AuthContext";

const useProgressValues = () => {
<<<<<<< HEAD
	const { localUserData } = useAuth();
	const [chapter1Value, setChapter1Value] = useState(0);
	const [chapter2Value, setChapter2Value] = useState(0);
	const [chapter3Value, setChapter3Value] = useState(0);

	const setProgressValues = () => {
		return { chapter1Value, chapter2Value, chapter3Value };
	};

	const setUserProgress = () => {
		getLocalUserProgress("chapter1").then((data) => {
			setChapter1Value(getScore(combinePageProgress(data).combinedProgress));
		});

		getLocalUserProgress("chapter2").then((data) => {
			setChapter2Value(getScore(combinePageProgress(data).combinedProgress));
		});

		getLocalUserProgress("chapter3").then((data) => {
			setChapter3Value(getScore(combinePageProgress(data).combinedProgress));
		});
	};

	useEffect(() => {
		setUserProgress();
		return () => console.log("oke");
	}, []);

	return { localUserData, setProgressValues };
};

export default useProgressValues;
=======

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
>>>>>>> 36b6b4b608bdea223f175814247441ce22cfae2c
