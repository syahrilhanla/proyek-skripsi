import firebase from 'firebase/app';
import 'firebase/auth';

let app;
const config = {
  apiKey: "AIzaSyBmb036d-K6LGFbZexqTunjBfuv0u3JlZQ",
  authDomain: "proyek-skripsi-78f39.firebaseapp.com",
  projectId: "proyek-skripsi-78f39",
  storageBucket: "proyek-skripsi-78f39.appspot.com",
  messagingSenderId: "83382461748",
  appId: "1:83382461748:web:2f743b30c24e090b5bf161"
}

if (!firebase.apps.length) {
  app = firebase.initializeApp(config);
}

// export const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export const popup = () => {
  return firebase.auth().signInWithPopup(provider)
    .then((result) => {
      /** @type {firebase.auth.OAuthCredential} */
      var credential = result.credential;

      // This gives you a Google Access Token. You can use it to access the Google API.
      var token = credential.accessToken;
      // The signed-in user info.
      var user = result.user;
      console.log(user);
      // ...
    }).catch((error) => {
      console.log(error)
    });
}
export default app;