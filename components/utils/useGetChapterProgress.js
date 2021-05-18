import { getLocalUserProgress } from "@/components/utils/userLocalSavings";

const useGetChapterProgress = async (parentPath) => {
	const checkCurrentLocation = (parentPath) => {
		if (parentPath === "analisis") return "chapter1";
		else if (parentPath === "pemusatan") return "chapter2";
		else if (parentPath === "penyebaran") return "chapter3";
	};

	// getting chapter local progress chapter by what current page user on
	const chapterProgress = await getLocalUserProgress(
		checkCurrentLocation(parentPath)
	);

	return { chapterProgress, checkCurrentLocation };
};

export default useGetChapterProgress;
