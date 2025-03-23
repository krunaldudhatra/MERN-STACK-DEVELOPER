// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDabWWK9mPBob6crgkHgnI9urRPuBNNb_w",
  authDomain: "buybusy-2-95f5f.firebaseapp.com",
  projectId: "buybusy-2-95f5f",
  storageBucket: "buybusy-2-95f5f.appspot.com",
  messagingSenderId: "853589782503",
  appId: "1:853589782503:web:1545e2ebeddfcbf8e0d742"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);