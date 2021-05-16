import { getCurrentPageProgress } from "./dataProcessors";
import { getLocalUserProgress } from "./userLocalSavings";

const useGetCurrentChapterProgress = async (router) => {
	// used to get the wanted chapter progress
	const getCurrentChapterProgress = async () => {
		const currentChapter = router.pathname.split("/")[1];
		const currentPage = router.pathname.split("/")[2];
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

	return getCurrentChapterProgress();
};

export default useGetCurrentChapterProgress;
