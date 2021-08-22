import { useState } from "react";
import { useBottomScrollListener } from "react-bottom-scroll-listener";
import useUpdateScrollAct from "@/components/utils/useUpdateScrollAct";
import useCheck1stAct from "@/components/utils/useCheck1stAct";

const useScrollActions = (
	scrollActID,
	parentPath,
	currentPath,
	setUpdateProgress,
	updateProgress
) => {
	const [displayQuestion, setDisplayQuestion] = useState(false);

	const callback = () => {
		useUpdateScrollAct(scrollActID, parentPath, currentPath);
		setUpdateProgress(!updateProgress);
	};

	const scrollRef = useBottomScrollListener(callback);

	useCheck1stAct(scrollActID, parentPath, currentPath).then((data) =>
		setDisplayQuestion(data)
	);

	return { displayQuestion, scrollRef };
};

export default useScrollActions;
