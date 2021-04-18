import { createContext, useContext } from "react";
import { useRouter } from "next/router";

import useSetDashboardProgress from "../utils/useSetDashboardProgress";
import { getCurrentPageProgress } from "../utils/dataProcessors";
import { getLocalUserProgress } from "../utils/userLocalSavings";

const ProgressContext = createContext();

export const useProgress = () => {
	return useContext(ProgressContext);
};

const ProgressProvider = ({ children }) => {
	const setProgress = useSetDashboardProgress();

	// used to get the wanted chapter progress
	const router = useRouter();
	const getCurrentChapterProgress = async () => {
		const currentChapter = router.pathname.split("/")[1];
		const currentPage = router.pathname.split("/")[2];
		console.log({ currentChapter }, { currentPage });
		if (currentChapter === "analisis") {
			return getCurrentPageProgress(
				await getLocalUserProgress("chapter1"),
				`page${currentPage}`
			);
		} else if (currentChapter === "pemusatan") {
			return getCurrentPageProgress(
				await getLocalUserProgress("chapter2"),
				`page${currentPage}`
			);
		} else if (currentChapter === "penyebaran") {
			return getCurrentPageProgress(
				await getLocalUserProgress("chapter3"),
				`page${currentPage}`
			);
		}
	};

	return (
		<ProgressContext.Provider
			value={{
				useProgress,
				getCurrentChapterProgress,
				dashboardLoading: setProgress.dashboardLoading,
				dashboardProgress: setProgress.dashboardProgress,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};

export default ProgressProvider;
