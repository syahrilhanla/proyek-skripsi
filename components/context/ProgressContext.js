// THIS CODE IS CRUCIAL FOR ANY PROGRESS IN THE WHOLE APP

import { createContext, useContext, useEffect, useState } from "react";
import { firestore } from "@/components/common/Firebase";

import { useAuth } from "@/components/context/AuthContext";

import useSetProgress from "@/components/utils/useSetProgress";

const ProgressContext = createContext();

export const useProgress = () => {
	return useContext(ProgressContext);
};

const ProgressProvider = ({ children }) => {
	const { userInfo } = useAuth();

	console.log({ userInfo });

	const setProgress = useSetProgress();
	const [quizScore, setQuizScore] = useState(0);
	const [isEvaluationOpen, setIsEvaluationOpen] = useState(true);

	useEffect(() => {
		if (userInfo !== null) {
			if (userInfo.className !== "Belum Masuk Kelas") {
				const snapShotData = firestore
					.collection("classNames")
					.doc(userInfo.className)
					.onSnapshot((doc) =>
						setIsEvaluationOpen(doc.data().isEvaluationOpen)
					);
				return () => snapShotData();
			}
		}
	}, [isEvaluationOpen, userInfo]);

	return (
		<ProgressContext.Provider
			value={{
				useProgress,
				dashboardLoading: setProgress.dashboardLoading,
				overallProgress: setProgress.dashboardProgress,
				quizScore,
				isEvaluationOpen,
				setQuizScore,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};

export default ProgressProvider;
