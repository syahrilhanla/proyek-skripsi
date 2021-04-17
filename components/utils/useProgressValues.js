import { useState, useEffect } from "react";

import {
	combinePageProgress,
	getScore,
} from "@/components/utils/dataProcessors";
import { getLocalUserProgress } from "@/components/utils/userLocalSavings";

import { useAuth } from "@/components/context/AuthContext";

const useProgressValues = () => {
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
