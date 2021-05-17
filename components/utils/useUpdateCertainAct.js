import {
	getLocalUserProgress,
	updateLocalProgress,
} from "@/components/utils/userLocalSavings";

const useUpdateCertainAct = async (actID, parentPath, currentPath) => {
	const currentPage = `page${currentPath}`;
	const checkCurrentLocation = (parentPath) => {
		if (parentPath === "analisis") return "chapter1";
		else if (parentPath === "pemusatan") return "chapter2";
		else if (parentPath === "penyebaran") return "chapter3";
	};

	// getting chapter local progress chapter by what current page user on
	const chapterProgress = await getLocalUserProgress(
		checkCurrentLocation(parentPath)
	);

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