import { useState, useEffect } from "react";

import {
	combinePageProgress,
	getScore,
} from "@/components/utils/dataProcessors";

import { useAuth } from "@/components/context/AuthContext";
import { useProgress } from "@/components/context/ProgressContext";

const useProgressValues = () => {
	// grabbing values from contexts
	const { localUserData } = useAuth();
	const { overallProgress, dashboardLoading } = useProgress();

	// this determines if page is ready to rendered or not
	const [pageReady, setPageReady] = useState(false);

	// states for percentages value
	const [chapter1Percentage, setChapter1Percentage] = useState(0);
	const [chapter2Percentage, setChapter2Percentage] = useState(0);
	const [chapter3Percentage, setChapter3Percentage] = useState(0);

	const setProgressValues = () => {
		return { chapter1Percentage, chapter2Percentage, chapter3Percentage };
	};

	// setting user progress from local to become percentage value
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

			setChapter1Percentage(getScore(chapter1Progress.combinedProgress));
			setChapter2Percentage(getScore(chapter2Progress.combinedProgress));
			setChapter3Percentage(getScore(chapter3Progress.combinedProgress));

			setPageReady(true);
		}
	};

	useEffect(() => {
		if (overallProgress !== null) {
			setUserProgress(overallProgress);
		}
	}, [dashboardLoading]);

	return {
		localUserData,
		setProgressValues,
		pageReady,
	};
};
export default useProgressValues;
