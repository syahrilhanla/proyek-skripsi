import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { getScore } from "@/components/utils/dataProcessors";
import useCheckActivity from "@/components/utils/useCheckActivity";
import useGetCurrentChapterProgress from "@/components/utils/useGetCurrentChapterProgress";

const useMainLayoutProgress = () => {
	const [pageProgress, setPageProgress] = useState([]);
	const router = useRouter();

	// passed into checking activity in utils/useCheckActivity
	const [isActive, setIsActive] = useState(true);

	// set this when there is any progress update
	const [updateProgress, setUpdateProgress] = useState(false);

	// check if user still active, if not then change isActive to false
	useCheckActivity(setIsActive, { timeToIdle: 30000 });

	useEffect(() => {
		useGetCurrentChapterProgress(router).then((data) =>
			setPageProgress(getScore(data))
		);
	}, [updateProgress]);

	return {
		pageProgress,
		isActive,
		updateProgress,
		setUpdateProgress,
		setIsActive,
	};
};

export default useMainLayoutProgress;
