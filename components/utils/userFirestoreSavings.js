import { firestore } from '../Firebase';

const docRef = firestore.collection('users');

export const getUserFirestore = async (localUser) => {
  if (localUser) {
    const data = await docRef.doc(localUser.uid).get();
    if (!data) {
      console.log('data not exists');
      return null
    }

    console.log('got the data');
    return data.data();
  } else return null;
}

export const getUserProgress = async (localUser) => {

  if (localUser) {
    const data = await docRef.doc(localUser.uid).collection('progress').get();
    if (!data) {
      console.log('progress yet not exists');
      return null
    }

    console.log('there is a progress');
    const results = data.docs.map(item => item.data());

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
    const initialData = [{
      analyze_table: 1,
      quiz1: 0
    }]


    const data = docRef.doc(localUser.uid).collection('progress');
    await data.doc().set({ initialData });
    console.log('progress created')

  } else return;
}

export const updateProgress = async (localUser, newData) => {
  if (localUser) {
    // data is just for experiment for now 
    console.log('updating progress');

    const data = docRef.doc(localUser.uid).collection('progress');
    await data.doc('wPipFsFca9IcydXFZFJ5').update({
      "initialData.quiz1": 8
    });
    console.log('progress updated');

  } else return;

}