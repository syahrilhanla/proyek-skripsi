import { firestore } from '../Firebase';

// documents references
const docRef = firestore.collection('users');

const createInitProgress = (collection, initialData) => {
  collection.doc('doc1').collection('page1').doc('act1').set(initialData);
}

const createDocRefs = (uid, initialData) => {
  try {
    const chapter1 = docRef.doc(uid).collection('chapter1');
    const chapter2 = docRef.doc(uid).collection('chapter2');
    const chapter3 = docRef.doc(uid).collection('chapter3');

    createInitProgress(chapter1, initialData);
    createInitProgress(chapter2, initialData);
    createInitProgress(chapter3, initialData);
  } catch (error) {
    console.log(`failed to create init refs: ${error}`);
  }
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
    const chapter1Page1 = await docRef.doc(localUser.uid).collection('chapter1').doc('doc1').collection('page1').get();

    // chapter1Page2 and so on...
    // const chapter1Page2 = await docRef.doc(localUser.uid).collection('chapter1').doc('doc1').collection('page2').get();

    const chapter2Data = await docRef.doc(localUser.uid).collection('chapter2').doc('doc1').collection('page1').get();

    const chapter3Data = await docRef.doc(localUser.uid).collection('chapter3').doc('doc1').collection('page1').get();

    if (!chapter1Page1 || chapter1Page1.length === 0) {
      console.log('progress yet not exists');
      return null
    }

    console.log(chapter1Page1);
    console.log('there is a progress');
    const results = chapter1Page1.docs.map(item => item.data());

    console.log(results);

    return results;
  } else return null;
}

export const addUser = async (localUser) => {
  if (localUser) {
    const userData = {
      displayName: localUser.displayName,
      photoURL: localUser.photoURL,
      email: localUser.email
    }

    const addData = docRef.doc(localUser.uid);
    await addData.set(userData)
    console.log('user added');

  } else return;
}

export const createUserProgress = async (localUser) => {

  if (localUser) {
    // data is just for experiment for now 
    const initialData = { act: true }

    console.log('progress created');

    createDocRefs(localUser.uid, initialData);

  } else return;
}

export const updateProgress = async (localUser, newData) => {
  if (localUser) {
    // data is just for experiment for now 
    console.log('updating progress');

    const data = docRef.doc(localUser.uid).collection('progress');
    await data.doc('upylsZjAbdW7b6O7lkx2').update({
      "initialData.quiz1": 8
    });
    console.log('progress updated');

  } else return;

}