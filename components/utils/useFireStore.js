import React from 'react';
import { firestore } from '../Firebase';

const useFireStore = async (localUser) => {

  const getUserFirestore = () => {
    if (localUser) {
      return firestore.collection('users').doc(localUser.uid).get().then((doc) => {
        if (!doc) {
          console.log('data not exists');
          return null
        }

        const data = doc.data();
        return data;
      });
    } else return null;
  }

  const addUser = () => {
    if (localUser) {
      const userData = {
        displayName: localUser.displayName,
        photoURL: localUser.photoURL,
        email: localUser.email
      }

      return firestore.collection('users')
        .doc(localUser.uid).set(userData)
        .then(() => console.log('user added'));
    } else return;
  }

  const userFireStore = await getUserFirestore();

  if (userFireStore === null || userFireStore === undefined) {
    await addUser();
  }

  return userFireStore;
}

export default useFireStore
