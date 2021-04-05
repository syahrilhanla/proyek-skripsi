import { createContext, useContext, useEffect, useState } from "react";
import { useAuth } from "@/components/context/AuthContext";
import {
	dataSeparator,
	getCurrentPageProgress,
} from "@/components/utils/dataProcessors";

const ProgressContext = createContext();

export const useProgress = () => {
	return useContext(ProgressContext);
};

const ProgressProvider = ({ children }) => {
	// userProgress is a promise, so use .then() and .catch()
	// can't use async await because this root function is used to render globally
	// so it should not be a promise
	const { userProgress } = useAuth();

	const [chapter1Progress, setChapter1Progress] = useState([]);
	const [chapter2Progress, setChapter2Progress] = useState([]);
	const [chapter3Progress, setChapter3Progress] = useState([]);

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

	const getProgress = (userProgress) => {
		// this also checked in when logging out, and the data will be null
		userProgress.then((data) => {
			// if no data or logged out, then exit function immediately;
			if (!data) return;

			// EXPECTED OUTPUT OF dataSeparator
			// [
			// 	{
			//   page1: [act1: Boolean, ... act(n): Boolean]
			// 	},
			// 	{
			//   	page(n): [act1: Boolean, ... act(n): Boolean]
			// 	}
			// ]

			const chapter1 = dataSeparator(data, "chapter1");
			const chapter2 = dataSeparator(data, "chapter2");
			const chapter3 = dataSeparator(data, "chapter3");

			setChapter1Progress(chapter1);
			setChapter2Progress(chapter2);
			setChapter3Progress(chapter3);
		});
	};

	// getting the value of the promise, then separate them to each array,
	// setting them to localState
	useEffect(() => {
		getProgress(userProgress);
	}, [userProgress]);

	return (
		<ProgressContext.Provider
			value={{
				useProgress,
				chapter1Progress,
				chapter2Progress,
				chapter3Progress,
				getCurrentPageProgress: getCurrentPageProgress,
			}}
		>
			{children}
		</ProgressContext.Provider>
	);
};

export default ProgressProvider;
