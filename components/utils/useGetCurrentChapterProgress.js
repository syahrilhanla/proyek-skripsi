import { useRouter } from "next/router";
import { getCurrentPageProgress } from "./dataProcessors";
import { getLocalUserProgress } from "./userLocalSavings";

const useGetCurrentChapterProgress = () => {
	// used to get the wanted chapter progress
	const router = useRouter();
	const getCurrentChapterProgress = () => {
		const currentChapter = router.pathname.split("/")[1];
		const currentPage = router.pathname.split("/")[2];
		if (currentChapter === "analisis") {
			return getCurrentPageProgress(
				getLocalUserProgress("chapter1"),
				`page${currentPage}`
			);
		} else if (currentChapter === "pemusatan") {
			return getCurrentPageProgress(
				getLocalUserProgress("chapter2"),
				`page${currentPage}`
			);
		} else if (currentChapter === "penyebaran") {
			return getCurrentPageProgress(
				getLocalUserProgress("chapter3"),
				`page${currentPage}`
			);
		}
	};

	return getCurrentChapterProgress;
};

export default useGetCurrentChapterProgress;
