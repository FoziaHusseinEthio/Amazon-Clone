
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBZgeWAvQzCKfIuCguLxJChD2_F7sdDhrs",
  authDomain: "clone-a3259.firebaseapp.com",
  projectId: "clone-a3259",
  storageBucket: "clone-a3259.firebasestorage.app",
  messagingSenderId: "687869205094",
  appId: "1:687869205094:web:ddc2c0cc4a311bc0e7aba7",
  measurementId: "G-RZ8NV1N1RR"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);