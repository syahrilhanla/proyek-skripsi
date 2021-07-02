import {
	getUserFirestore,
	getUserProgress,
	addUser,
	createUserProgress,
} from "./userFirestoreSavings";

const useFireStore = async (localUser) => {
	const checkingInitialUser = async () => {
		// getting user from firestore when application start
		const userFireStore = await getUserFirestore(localUser);

		// checking if theres any data from the function above
		if (userFireStore === null || userFireStore === undefined) {
			await addUser(localUser);
		}
	};

	const checkingInitialProgress = async () => {
		// getting user progress from firestore when application start
		const progressData = await getUserProgress(localUser);

		// checking if there is no progress then create initial progress
		if (!progressData) {
			await createUserProgress(localUser);
		}

		return progressData;
	};

	await checkingInitialUser();
	const progressData = await checkingInitialProgress();

	return progressData;
};

export default useFireStore;
