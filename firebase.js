import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCWC-NzZPzw6rb2a8TIgVG_aEtStidl1cs",
  authDomain: "disney-clone-1e1f9.firebaseapp.com",
  projectId: "disney-clone-1e1f9",
  storageBucket: "disney-clone-1e1f9.appspot.com",
  messagingSenderId: "971190827035",
  appId: "1:971190827035:web:823d1f2530ec1e334420be",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
