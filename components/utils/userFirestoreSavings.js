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
	console.log(classList);
	return classList;
};

// ================================== USED BY ADMIN ==============================================
export const getAllUserProgress = async () => {
	const usersData = (await docRef.get()).docs.map((doc) => doc.data());
	return usersData;
};

export const addClass = async (className) => {
	if (className) {
		firestore.collection("classNames").doc(className).set({
			className: className,
		});
	} else return;
};

// ================================== USED BY USERS ==============================================

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

export const getUserProgress = async (localUser) => {
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
};

export const addUser = async (localUser) => {
	// creating user if there's none, with the credentials from localStorage
	if (localUser) {
		const userData = {
			displayName: localUser.displayName,
			photoURL: localUser.photoURL,
			email: localUser.email,
		};

		// setting them to firestore so it can be used in data display
		const addData = docRef.doc(localUser.uid);
		await addData.set(userData);
	} else return;
};
