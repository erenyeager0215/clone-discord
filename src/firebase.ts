import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA2bCVzD7xxIsVZ7LhyLc-voH-o-GGrQnA",
  authDomain: "discord-clone-udemy-598f0.firebaseapp.com",
  projectId: "discord-clone-udemy-598f0",
  storageBucket: "discord-clone-udemy-598f0.appspot.com",
  messagingSenderId: "428900340431",
  appId: "1:428900340431:web:c0c340293c9321e9c39dba",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, db };
