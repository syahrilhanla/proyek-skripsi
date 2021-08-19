import useUpdateCertainAct from "@/components/utils/useUpdateCertainAct";

const useUpdateScrollAct = (scrollActID, parentPath, currentPath) => {
	if (scrollActID) {
		useUpdateCertainAct(scrollActID, parentPath, currentPath);
	} else return;
};

export default useUpdateScrollAct;
