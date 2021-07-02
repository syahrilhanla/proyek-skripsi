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

	// checking if user is in quiz page, then do nothing
	// if user is still in the learning material, then update progress
	if (currentPage !== NaN)
		await updateProgress(
			localUserData,
			acts,
			checkCurrentLocation(currentChapter),
			`page${currentPage}`
		);
	else return;
};

export default useUpdateProgress;
