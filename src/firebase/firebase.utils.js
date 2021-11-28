import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
  apiKey: "AIzaSyCTONzn6p159LDBvuAb3A30F33vxYDNiQw",
  authDomain: "crwn-db-58ec2.firebaseapp.com",
  projectId: "crwn-db-58ec2",
  storageBucket: "crwn-db-58ec2.appspot.com",
  messagingSenderId: "701319862051",
  appId: "1:701319862051:web:faa767abcddd6dc6eede96",
  measurementId: "G-VW6S4P9D7W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const SignInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
