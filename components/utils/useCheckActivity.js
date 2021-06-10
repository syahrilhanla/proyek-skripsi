import { useEffect } from "react";
import dynamic from "next/dynamic";
import createActivityDetector from "activity-detector";

// pass in hooks from MainLayout component to update its value

const useCheckActivity = dynamic(
	(setIsActive, option) => {
		// fires every time user moves the mouse or pressing keys to reset the count down back to 5 minutes

		useEffect(() => {
			console.log(typeof window);
			if (typeof (window !== "undefined")) {
				console.log("window is object");
				const activityDetector = createActivityDetector(option);
				activityDetector.on("idle", () => setIsActive(false));
				// activityDetector.on("active", () => setUserActive());
				return () => activityDetector.stop();
			}
		}, []);
	},
	{ ssr: false }
);
export default useCheckActivity;
