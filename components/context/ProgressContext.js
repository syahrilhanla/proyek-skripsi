// THIS CODE IS CRUCIAL FOR ANY PROGRESS IN THE WHOLE APP

import { createContext, useContext } from "react";

import useSetProgress from "@/components/utils/useSetProgress";

const ProgressContext = createContext();

export const useProgress = () => {
	return useContext(ProgressContext);
};

const ProgressProvider = ({ children }) => {
	const setProgress = useSetProgress();

	return (
		<ProgressContext.Provider
			value={{
				useProgress,
				dashboardLoading: setProgress.dashboardLoading,
				overallProgress: setProgress.dashboardProgress,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};

export default ProgressProvider;
