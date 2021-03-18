import React from 'react';
import { firestore } from '../Firebase';

const useFireStore = (localUser) => {

  if (localUser) {
    const userData = {
      displayName: localUser.displayName,
      photoURL: localUser.photoURL,
      email: localUser.email
    }

    return firestore.collection('users')
      .doc(localUser.uid).set(userData)
      .then(() => console.log('user added'));
  } else return

}

export default useFireStore
