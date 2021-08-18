// USED IN EVERY ACTION, NEEDED TO UPDATE USER PROGRESS ON DETAIL LEVEL

import { updateLocalProgress } from "@/components/utils/userLocalSavings";
import useGetChapterProgress from "@/components/utils/useGetChapterProgress";

// Used only when user had done an activity correctly
// Only updates single element of array

const useUpdateCertainAct = async (actID, parentPath, currentPath) => {
	const { chapterProgress, checkCurrentLocation } = await useGetChapterProgress(
		parentPath
	);
	const currentPage = `page${currentPath}`;

	// updating the boolean value based on actID
	const newProgress = chapterProgress.map((item) => {
		if (item.page === currentPage) {
			item.pageData.map((data) => {
				if (data.name === actID) {
					data.act = !data.act;
				}
			});
		}
		return item;
	});

	updateLocalProgress(checkCurrentLocation(parentPath), newProgress);
};

export default useUpdateCertainAct;
