import { useRouter } from "next/router";
import { useState, useEffect } from "react";

import { getScore } from "@/components/utils/dataProcessors";
import useCheckActivity from "@/components/utils/useCheckActivity";
import useUpdateProgress from "@/components/utils/useUpdateProgress";
import useGetCurrentChapterProgress from "@/components/utils/useGetCurrentChapterProgress";
import useGetCurrentPage from "@/components/utils/useGetCurrentPage";

import { useAuth } from "@/components/context/AuthContext";

const useMainLayoutProgress = () => {
	// #### used to update progress to firestore
	const { localUserData } = useAuth();
	const { parentPath, currentPath, currentURL } = useGetCurrentPage();
	// ####

	const [pageProgress, setPageProgress] = useState([]);
	const router = useRouter();

	// passed into checking activity in utils/useCheckActivity
	const [isActive, setIsActive] = useState(true);

	// set this when there is any progress update
	const [updateProgress, setUpdateProgress] = useState(false);

	// check if user still active, if not then change isActive to false
	useCheckActivity(setIsActive, { timeToIdle: 120000 });

	useEffect(() => {
		let unmount = false;
		if (!unmount) {
			useGetCurrentChapterProgress(router).then((data) =>
				setPageProgress(getScore(data))
			);
			if (parentPath !== "admin") {
				useUpdateProgress(parentPath, currentPath, localUserData);
			}
		}

		() => {
			unmount = true;
		};
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
