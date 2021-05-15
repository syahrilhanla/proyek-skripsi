import {
	getLocalUserProgress,
	updateLocalProgress,
} from "@/components/utils/userLocalSavings";

const useUpdateCertainAct = async (actID, parentPath, currentPath) => {
	const updateValue = false;

	const currentPage = `page${currentPath}`;
	const checkCurrentLocation = (parentPath) => {
		if (parentPath === "analisis") return "chapter1";
		else if (parentPath === "pemusatan") return "chapter2";
		else if (parentPath === "penyebaran") return "chapter3";
	};

	const chapterProgress = await getLocalUserProgress(
		checkCurrentLocation(parentPath)
	);

	// updating the boolean value in page progress
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

	return !updateValue;
};

export default useUpdateCertainAct;
