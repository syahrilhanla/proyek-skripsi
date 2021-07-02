// pass in hooks from MainLayout component to update its value
// used in useMainLayoutProgress hook

const useCheckActivity = async (setIsActive, option) => {
	// use dynamic import to load library which uses browser engine
	const createActivityDetector = (await import("activity-detector")).default;

	// fires every time user goes idle (doing nothing for 2 minutes, goes to other tab or window, anything that cause losing the focus of the app)
	const activityDetector = createActivityDetector(option);
	activityDetector.on("idle", () => setIsActive(false));
};
export default useCheckActivity;
