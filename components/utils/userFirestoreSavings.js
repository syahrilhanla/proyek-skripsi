import { firestore } from '../Firebase';
import { initialData } from '@/components/data/initialData';
import { dataExtractor } from '@/components/utils/dataExtractor';

// ROOT DOCUMENTS REFERENCE
const docRef = firestore.collection('users');

// used in createUserProgress
// UID from localStorage credential, initialData currently from createUserProgress below
const createDocRefs = (uid, initialData) => {

  // function to create document references
  const createInitProgress = (collection, initialData) => {
    // docRef.doc(uid).collection(collection).doc('page1').set(initialData);

    const chapterRef = docRef.doc(uid).collection(collection);

    initialData.map(item => {
      const docs = chapterRef.doc(item.page);
      docs.set({ acts: item.acts });
    })
  }

  try {
    initialData.map(item => {
      createInitProgress(item.chapter, item.pages)
    })
  } catch (error) {
    console.log(`failed to create init refs: ${error}`);
  }
}

// fired when there is no user checked in the initial loading
export const createUserProgress = async (localUser) => {

  if (localUser) {
    // this data is only for experiment for now 


    console.log('progress created');

    createDocRefs(localUser.uid, initialData);

  } else return;
}

// THIS FUNCTION HAS NOT BEEN USED YET
export const updateProgress = async (localUser, newData) => {
  if (localUser) {
    // data is just for experiment for now 
    console.log('updating progress');

    // docs id below only used for testing
    const data = docRef.doc(localUser.uid).collection('progress');
    await data.doc('upylsZjAbdW7b6O7lkx2').update({
      "initialData.quiz1": 8
    });
    console.log('progress updated');

  } else return;
}

export const getUserFirestore = async (localUser) => {
  if (localUser) {
    const data = await docRef.doc(localUser.uid).get();
    if (!data) {
      console.log('user not exists');
      return null
    }

    console.log('got the user');
    return data.data();
  } else return null;
}

export const getUserProgress = async (localUser) => {

  if (localUser) {

    // getting chapters data through function with String as its argument
    const getChapterData = async (collection) => {
      const chapterData = await (docRef.doc(localUser.uid)
        .collection(collection)
        .get());

      // returning the docs of the collection as an array
      return chapterData.docs.map(doc => doc.data());
    }

    // setting them to variables
    const rawChapter1Data = await getChapterData('chapter1');
    const rawChapter2Data = await getChapterData('chapter2');
    const rawChapter3Data = await getChapterData('chapter3');

    // if no progress then returns null, so it creates new progress  
    if (!rawChapter1Data || rawChapter1Data.length === 0) {
      console.log('progress yet not exists');
      return null;
    }

    // returned as an array which consists (n) number of elements with page as object key
    // expected output [{page1: [act1: Boolean, ... act(n): Boolean]}, ... {page(n): [act1: Boolean, ... act(n): Boolean]}];
    const chapter1Data = dataExtractor(rawChapter1Data);
    const chapter2Data = dataExtractor(rawChapter2Data);
    const chapter3Data = dataExtractor(rawChapter3Data);

    // returning results as objects within an array
    const results = [
      { chapter: 'chapter1', data: chapter1Data },
      { chapter: 'chapter2', data: chapter2Data },
      { chapter: 'chapter3', data: chapter3Data }
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
      email: localUser.email
    }

    // setting them to firestore so it can be used in data display
    const addData = docRef.doc(localUser.uid);
    await addData.set(userData)
    console.log('user added');

  } else return;
}
