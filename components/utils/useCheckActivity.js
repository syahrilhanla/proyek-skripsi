import { useMemo } from "react";

const useCheckActivity = (isActive, setIsActive) => {
	const resetTimer = () => {
		setTimeout(() => setIsActive(false), 300000);
	};

	// only reset the timer when the value changes
	const activeMemo = useMemo(() => resetTimer, [isActive]);

	// reset count if user interacts with the app
	document.addEventListener("mousemove", activeMemo);
	document.addEventListener("keypress", activeMemo);
};
export default useCheckActivity;
