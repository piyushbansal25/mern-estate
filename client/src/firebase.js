// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-project-1ab62.firebaseapp.com",
  projectId: "mern-project-1ab62",
  storageBucket: "mern-project-1ab62.appspot.com",
  messagingSenderId: "953110563652",
  appId: "1:953110563652:web:3ef2a766f34873b0f8e511"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);