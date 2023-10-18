// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import {getFirestore} from "firebase/firestore";
import { getAuth } from "firebase/auth";
// import firebase from 'firebase';
import { GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDTvVm98OekqZOAwY3BjI0ucnQXnk4deas",
  authDomain: "dashboard-68744.firebaseapp.com",
  projectId: "dashboard-68744",
  storageBucket: "dashboard-68744.appspot.com",
  messagingSenderId: "60558892100",
  appId: "1:60558892100:web:4888719beeae7eb3ba7011"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);
const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
export {app,auth,googleProvider};
