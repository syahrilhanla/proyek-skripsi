// THIS CODE IS CRUCIAL FOR ANY PROGRESS IN THE WHOLE APP

import { createContext, useContext, useState } from "react";

import useSetProgress from "@/components/utils/useSetProgress";

const ProgressContext = createContext();

export const useProgress = () => {
	return useContext(ProgressContext);
};

const ProgressProvider = ({ children }) => {
	const setProgress = useSetProgress();
	const [quizScore, setQuizScore] = useState(0);

	return (
		<ProgressContext.Provider
			value={{
				useProgress,
				dashboardLoading: setProgress.dashboardLoading,
				overallProgress: setProgress.dashboardProgress,
				quizScore,
				setQuizScore,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};

export default ProgressProvider;
