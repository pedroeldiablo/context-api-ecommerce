import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAasLKs6y3fewtGjaHbCNSjx90P1XTHF3A",
  authDomain: "context-api-ecommerce.firebaseapp.com",
  databaseURL: "https://context-api-ecommerce.firebaseio.com",
  projectId: "context-api-ecommerce",
  storageBucket: "",
  messagingSenderId: "668462548345",
  appId: "1:668462548345:web:991abee1a282730e74dba8",
  measurementId: "G-06JYGWPR0F"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
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
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
