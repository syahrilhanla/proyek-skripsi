import { useMemo } from "react";

// pass in hooks from MainLayout component to update its value
const useCheckActivity = (isActive, setIsActive) => {

	// fires every time user moves the mouse or pressing keys to reset the count down back to 5 minutes
	const resetTimer = () => {
		setTimeout(() => setIsActive(false), 300000);
	};

	// only reset the timer if and only if isActive's value changes (after the modal popped up and closed)
	const activeMemo = useMemo(() => resetTimer, [isActive]);

	// reset count if user interacts with the app
	document.addEventListener("mousemove", activeMemo);
	document.addEventListener("keypress", activeMemo);
};
export default useCheckActivity;
