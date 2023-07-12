// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";



const firebaseConfig = {
  apiKey: "AIzaSyD21kTBlolXHHExa5YjkQvWvMRAIWqo8mo",
  authDomain: "chatooze-89e0e.firebaseapp.com",
  projectId: "chatooze-89e0e",
  storageBucket: "chatooze-89e0e.appspot.com",
  messagingSenderId: "317568497409",
  appId: "1:317568497409:web:471413e17882b70eee4d00"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage();
export const db=getFirestore()