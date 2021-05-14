import { getLocalUserProgress } from "./userLocalSavings";

const useUpdateCertainAct = async (actID, parentPath, currentPath) => {
	console.log("this is useUpdateCertainAct");

	console.log(actID);
	const chapterProgress = await getLocalUserProgress("chapter1");
	console.log({ parentPath }, { currentPath });
	console.log(chapterProgress);
};

export default useUpdateCertainAct;
