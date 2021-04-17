import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import {
<<<<<<< HEAD
	dataSeparator,
	getCurrentPageProgress,
=======
  dataSeparator,
  getCurrentPageProgress,
>>>>>>> 36b6b4b608bdea223f175814247441ce22cfae2c
} from "@/components/utils/dataProcessors";
import { useRouter } from "next/router";

import {
	setLocalProgress,
	getLocalUserProgress,
} from "@/components/utils/userLocalSavings";

const ProgressContext = createContext();

export const useProgress = () => {
	return useContext(ProgressContext);
};

const ProgressProvider = ({ children }) => {
	// userProgress is a promise, so use .then() and .catch()
	// can't use async await because this root function is used to render globally
	// so it should not be a promise
	const { userProgress } = useAuth();

	const [dashboardLoading, setDashboardLoading] = useState(true);
	const [dashboardProgress, setDashboardProgress] = useState(null);

	// used to get the wanted chapter progress
	const router = useRouter();
	const getCurrentChapterProgress = () => {
		const currentChapter = router.pathname.split("/")[1];
		const currentPage = router.pathname.split("/")[2];
		if (currentChapter === "analisis") {
			return getCurrentPageProgress(
				getLocalUserProgress("chapter1"),
				`page${currentPage}`
			);
		} else if (currentChapter === "pemusatan") {
			return getCurrentPageProgress(
				getLocalUserProgress("chapter2"),
				`page${currentPage}`
			);
		} else if (currentChapter === "penyebaran") {
			return getCurrentPageProgress(
				getLocalUserProgress("chapter3"),
				`page${currentPage}`
			);
		}
	};

	/*
    EXPECTED OUTPUT of userProgress:
    [
      { chapter: chapter(n),
        data: [
          {
            page1: [act1: Boolean, ... act(n): Boolean]
          },  
          {
            page(n): [act1: Boolean, ... act(n): Boolean]
          }
        ]
      }
    ]
  */

	const getProgress = async (userProgress) => {
		// this also checked in when logging out, and the data will be null

		const data = await userProgress;

		// if no data or logged out, then exit function immediately;
		if (!data) return;

		// EXPECTED OUTPUT OF dataSeparator
		// [
		// 	{
		//   	page(n): [act1: Boolean, ... act(n): Boolean]
		// 	}
		// ]

		const chapter1 = dataSeparator(data, "chapter1");
		const chapter2 = dataSeparator(data, "chapter2");
		const chapter3 = dataSeparator(data, "chapter3");

		await setLocalProgress("chapter1", chapter1);
		await setLocalProgress("chapter2", chapter2);
		await setLocalProgress("chapter3", chapter3);
	};

	const settingUpProgress = async () => {
		await getProgress(userProgress);
		const chapter1 = await getLocalUserProgress("chapter1");
		const chapter2 = await getLocalUserProgress("chapter2");
		const chapter3 = await getLocalUserProgress("chapter3");

		console.log(chapter1);
		setDashboardProgress({ chapter1, chapter2, chapter3 });
	};

	// getting the value of the promise, then separate them to each array,
	// setting them to localState
	useEffect(() => {
		settingUpProgress();
	}, [userProgress]);

	useEffect(() => {
		if (dashboardProgress !== null) {
			setDashboardLoading((prevState) => !prevState);
			console.log(dashboardLoading);
		}
	}, [dashboardProgress]);

	return (
		<ProgressContext.Provider
			value={{
				useProgress,
				getCurrentPageProgress,
				getCurrentChapterProgress,
				dashboardLoading,
				dashboardProgress,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};

export default ProgressProvider;
