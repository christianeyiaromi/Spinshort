import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDOcWL4EB6YhwChALRTgwGU3BPHckS8fic",
  authDomain: "scissor-d036b.firebaseapp.com",
  projectId: "scissor-d036b",
  storageBucket: "scissor-d036b.appspot.com",
  messagingSenderId: "950049449754",
  appId: "1:950049449754:web:b66fd1584921aed2356ea3",
};
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);

export { auth, app, firestore };
