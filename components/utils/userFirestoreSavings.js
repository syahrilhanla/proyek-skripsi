import { firestore } from "@/components/common/Firebase";
import { initialData } from "@/components/data/initialData";
import { dataExtractor } from "@/components/utils/dataProcessors";

// ROOT DOCUMENTS REFERENCE
const docRef = firestore.collection("users");

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

// fired when there is no user checked in the initial loading
export const createUserProgress = async (localUser) => {
	if (localUser) {
		// this data is only for experiment for now

		console.log("progress created");

		createDocRefs(localUser.uid, initialData);
	} else return;
};

// THIS FUNCTION WILL BE USED WHEN USER MOVE FROM THE CURRENT PAGE
export const updateProgress = async (localUser) => {
	if (localUser) {
		// data is just for experiment for now
		console.log("updating progress");

		// docs id below only used for testing
		const data = docRef.doc(localUser.uid).collection("chapter1");

		data.doc("page1").update({});
		console.log("progress updated");
	} else return;
};

export const getUserFirestore = async (localUser) => {
	if (localUser) {
		const data = await docRef.doc(localUser.uid).get();
		if (!data) {
			console.log("user not exists");
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
			console.log("progress yet not exists");
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

		console.log({ rawChapter1Data });

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
		console.log("user added");
	} else return;
};
