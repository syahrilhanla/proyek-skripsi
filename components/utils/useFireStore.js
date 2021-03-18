import { firestore } from '../Firebase';

const useFireStore = async (localUser) => {

  const docRef = firestore.collection('users')

  const getUserFirestore = async () => {
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

  const addUser = async () => {
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

  const userFireStore = await getUserFirestore();

  if (userFireStore === null || userFireStore === undefined) {
    await addUser();
  }

  return userFireStore;
}

export default useFireStore
