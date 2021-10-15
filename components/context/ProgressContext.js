// THIS CODE IS CRUCIAL FOR ANY PROGRESS IN THE WHOLE APP

import { createContext, useContext, useEffect, useState } from "react";

import useSetProgress from "@/components/utils/useSetProgress";
import { firestore } from "@/components/common/Firebase";

const ProgressContext = createContext();

export const useProgress = () => {
	return useContext(ProgressContext);
};

const ProgressProvider = ({ children }) => {
	const setProgress = useSetProgress();
	const [quizScore, setQuizScore] = useState(0);
	const [isEvaluationOpen, setIsEvaluationOpen] = useState(true);

	useEffect(() => {
		const snapShotData = firestore
			.collection("classNames")
			.doc("IX C")
			.onSnapshot((doc) => setIsEvaluationOpen(doc.data().isEvaluationOpen));

		return () => snapShotData();
	}, [isEvaluationOpen]);

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
