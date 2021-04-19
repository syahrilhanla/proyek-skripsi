import { useState, useEffect } from "react";

import {
	combinePageProgress,
	getScore,
} from "@/components/utils/dataProcessors";

import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

const useProgressValues = () => {
	const { localUserData } = useAuth();
	const { dashboardProgress, dashboardLoading } = useProgress();

	const [pageReady, setPageReady] = useState(false);

	const [chapter1Value, setChapter1Value] = useState(0);
	const [chapter2Value, setChapter2Value] = useState(0);
	const [chapter3Value, setChapter3Value] = useState(0);

	const setProgressValues = () => {
		return { chapter1Value, chapter2Value, chapter3Value };
	};

	const setUserProgress = async (dashboardProgress) => {
		if (dashboardProgress.chapter1 !== undefined) {
			const chapter1Progress = combinePageProgress(
				await dashboardProgress.chapter1
			);
			const chapter2Progress = combinePageProgress(
				await dashboardProgress.chapter2
			);
			const chapter3Progress = combinePageProgress(
				await dashboardProgress.chapter3
			);

			setChapter1Value(getScore(chapter1Progress.combinedProgress));
			setChapter2Value(getScore(chapter2Progress.combinedProgress));
			setChapter3Value(getScore(chapter3Progress.combinedProgress));

			setPageReady(true);
		}
	};

	useEffect(() => {
		if (dashboardProgress !== null) {
			setUserProgress(dashboardProgress);
		}
	}, [dashboardLoading]);

	return {
		localUserData,
		setProgressValues,
		pageReady,
	};
};
export default useProgressValues;
