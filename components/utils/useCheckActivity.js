const useCheckActivity = (setIsActive) => {
	const resetTimer = () => setTimeout(() => setIsActive(false), 300000);

	// reset count if user interacts with the app
	document.addEventListener("mousemove", resetTimer);
	document.addEventListener("keypress", resetTimer);
};
export default useCheckActivity;
