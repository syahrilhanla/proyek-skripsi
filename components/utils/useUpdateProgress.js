import useGetChapterProgress from "@/components/utils/useGetChapterProgress";
import { updateProgress } from "@/components/utils/userFirestoreSavings";

// update user progress on page
const useUpdateProgress = async (
	currentChapter,
	currentPage,
	localUserData
) => {
	const { chapterProgress, checkCurrentLocation } = await useGetChapterProgress(
		currentChapter
	);

	const newProgress = chapterProgress.filter((item) => {
		return item.page === `page${currentPage}`;
	});

	const acts = newProgress.map((item) => item.pageData)[0];

	await updateProgress(
		localUserData,
		acts,
		checkCurrentLocation(currentChapter),
		`page${currentPage}`
	);
};

export default useUpdateProgress;
