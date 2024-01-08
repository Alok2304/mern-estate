// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-72cd1.firebaseapp.com",
  projectId: "mern-estate-72cd1",
  storageBucket: "mern-estate-72cd1.appspot.com",
  messagingSenderId: "326560881257",
  appId: "1:326560881257:web:59868dcfbfe8cd845320f8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);