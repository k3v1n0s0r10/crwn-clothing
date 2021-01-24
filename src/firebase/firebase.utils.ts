import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCSyjDSswZSQE7EHLfhDTGXtKIAKK7yMXg",
  authDomain: "crwn-db-e7eda.firebaseapp.com",
  databaseURL: "https://crwn-db-e7eda.firebaseio.com",
  projectId: "crwn-db-e7eda",
  storageBucket: "crwn-db-e7eda.appspot.com",
  messagingSenderId: "871481305796",
  appId: "1:871481305796:web:ffad1cd14bb4b13abb7791",
  measurementId: "G-9DBL8MTL5J",
};

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;

    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.error("Error creating user", err);
    }
  }

  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);
