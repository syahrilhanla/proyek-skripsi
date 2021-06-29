// DO NOT CHANGE ANYTHING FROM HERE, NOT A SINGLE LETTER

import firebase from "firebase";
import "firebase/firestore";

let app;
const firebaseConfig = {
	apiKey: "AIzaSyBmb036d-K6LGFbZexqTunjBfuv0u3JlZQ",
	authDomain: "proyek-skripsi-78f39.firebaseapp.com",
	projectId: "proyek-skripsi-78f39",
	storageBucket: "proyek-skripsi-78f39.appspot.com",
	messagingSenderId: "83382461748",
	appId: "1:83382461748:web:2f743b30c24e090b5bf161",
};

// initialize firebase provider
if (!firebase.apps.length) {
	app = firebase.initializeApp(firebaseConfig);
}

const provider = new firebase.auth.GoogleAuthProvider();

export const auth = firebase.auth();

export const firestore = firebase.firestore();

// Displaying popup signIn
export const popup = () => {
	const signIn = auth
		.signInWithPopup(provider)
		.then((result) => {
			/** @type {firebase.auth.OAuthCredential} */
			const credential = result.credential;

			// This gives you a Google Access Token. You can use it to access the Google API.
			const token = credential.accessToken;
			// The signed-in user info.
			const user = result.user;
			// ...
		})
		.catch((error) => {
			console.log(error);
		});
	return signIn;
};
export default app;
