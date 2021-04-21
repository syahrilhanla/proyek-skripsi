import { createContext, useContext } from "react";
import { useRouter } from "next/router";

import useSetProgress from "../utils/useSetProgress";

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
				dashboardProgress: setProgress.dashboardProgress,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};

export default ProgressProvider;
