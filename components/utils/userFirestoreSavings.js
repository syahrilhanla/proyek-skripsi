import { firestore } from "@/components/common/Firebase";
import { initialData } from "@/components/data/initialData";
import { dataExtractor } from "@/components/utils/dataProcessors";

// ROOT DOCUMENTS REFERENCE
const docRef = firestore.collection("users");

// ================================== USED BY ALL ==============================================

// used in createUserProgress
// UID from localStorage credential, initialData currently from createUserProgress below
const createDocRefs = (uid, initialData) => {
	// function to create document references
	const createInitProgress = (collection, initialData) => {
		// docRef.doc(uid).collection(collection).doc('page1').set(initialData);

		const chapterRef = docRef.doc(uid).collection(collection);

		initialData.map((item) => {
			const docs = chapterRef.doc(item.page);
			docs.set({ acts: item.acts });
		});
	};

	try {
		initialData.map((item) => {
			createInitProgress(item.chapter, item.pages);
		});
	} catch (error) {
		console.log(`failed to create init refs: ${error}`);
	}
};

export const getClassList = async () => {
	const classList = (await firestore.collection("classNames").get()).docs.map(
		(doc) => doc.data()
	);
	return classList;
};

// ================================== USED BY ADMIN ==============================================
export const getAllUserProgress = async () => {
	const usersData = (await docRef.get()).docs.map((doc) => doc.data());
	return usersData;
};

export const getAllAdminData = async () => {
	const adminsData = (await firestore.collection("adminList").get()).docs.map(
		(doc) => doc.data()
	);
	return adminsData;
};

export const getUsersDetails = async (usersData) => {
	if (usersData) {
		const usersDetails = usersData.map(async (user) => {
			return {
				displayName: user.displayName,
				progress: await getUserProgress(user),
			};
		});
		const results = await Promise.all(usersDetails);
		return results;
	}
};

export const addAdmin = async (newData) => {
	if (newData) {
		firestore.collection("adminList").doc(newData.displayName).set({
			displayName: newData.displayName,
			email: newData.email,
			isDefaultAdmin: false,
		});
	} else return;
};

export const addClass = async (className, password) => {
	if (className && password) {
		firestore.collection("classNames").doc(className).set({
			className: className,
			password: password,
			isEvaluationOpen: false,
		});
	} else return;
};

export const openEvaluationSwitch = (className, isEvaluationOpen) => {
	if (className) {
		firestore
			.collection("classNames")
			.doc(className)
			.update({ isEvaluationOpen: isEvaluationOpen });
	} else return;
};

export const deleteUserDocument = (userID) => {
	try {
		docRef.doc(userID).delete();
		return true;
	} catch (error) {
		return false;
	}
};

export const deleteAdminDocument = (admin) => {
	try {
		if (admin.isDefaultAdmin === false) {
			firestore.collection("adminList").doc(admin.displayName).delete();
			return true;
		} else return false;
	} catch (error) {
		return false;
	}
};

// ================================== USED BY USERS ==============================================

export const joinClass = async (localUser, className) => {
	if (className && localUser) {
		docRef.doc(localUser).update({ className: className });
		// console.log({ localUser, className });
	} else return;
};

// fired when there is no user checked in the initial loading
export const createUserProgress = async (localUser) => {
	if (localUser) {
		createDocRefs(localUser.uid, initialData);
	} else return;
};

// THIS FUNCTION WILL BE USED WHEN USER MOVE FROM THE CURRENT PAGE
export const updateProgress = async (
	localUser,
	acts,
	currentChapter,
	currentPage
) => {
	if (localUser) {
		const data = docRef.doc(localUser.uid).collection(currentChapter);

		await data.doc(currentPage).set({ acts });
	} else return;
};

export const getUserFirestore = async (localUser) => {
	if (localUser) {
		const data = await docRef.doc(localUser.uid).get();
		if (!data) {
			return null;
		}

		return data.data();
	} else return null;
};

export async function getUserProgress(localUser) {
	if (localUser) {
		// getting chapters data through function with String as its argument
		const getChapterData = async (collection) => {
			const chapterData = await docRef
				.doc(localUser.uid)
				.collection(collection)
				.get();

			// returning the docs of the collection as an array
			return chapterData.docs.map((doc) => doc.data());
		};

		// just setting them to variables
		const rawChapter1Data = await getChapterData("chapter1");
		const rawChapter2Data = await getChapterData("chapter2");
		const rawChapter3Data = await getChapterData("chapter3");

		// if no progress then returns null, so it creates new progress
		if (!rawChapter1Data || rawChapter1Data.length === 0) {
			return null;
		}

		// returned as an array which consists (n) number of elements with page as object key
		// expected output [
		// {
		//   page: page1,
		//   pageData: [act1, ...]
		// },
		// {
		//   page: page(n),
		//   pageData: [act1, ...]
		// ];

		// returning results as objects within an array
		const results = [
			{ chapter: "chapter1", data: dataExtractor(rawChapter1Data) },
			{ chapter: "chapter2", data: dataExtractor(rawChapter2Data) },
			{ chapter: "chapter3", data: dataExtractor(rawChapter3Data) },
		];

		return results;
	} else return null;
}

export const addUser = async (localUser) => {
	// creating user if there's none, with the credentials from localStorage
	if (localUser) {
		const userData = {
			displayName: localUser.displayName,
			photoURL: localUser.photoURL,
			email: localUser.email,
			uid: localUser.uid,
			className: "Belum Masuk Kelas",
			score: 0,
			hasDoneQuiz: false,
			overallAnswers: [],
		};

		// setting them to firestore so it can be used in data display
		const addData = docRef.doc(localUser.uid);
		await addData.set(userData);
	} else return;
};

export const submitTestScore = (localUser, score, overallAnswers) => {
	// console.log(score);
	if (score) {
		const userData = { score: score };
		docRef.doc(localUser).update(userData);
		docRef.doc(localUser).update({ hasDoneQuiz: true });
		docRef.doc(localUser).update({ overallAnswers });
	} else return;
};
