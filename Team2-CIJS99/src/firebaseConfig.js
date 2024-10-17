// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth , GoogleAuthProvider, createUserWithEmailAndPassword, signInWithPopup,signInWithEmailAndPassword, } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUDnrXceyxpASayy_UdCdhMBjQgjTFIDY",
  authDomain:  "https://clothes-git-categories-thao-ngocs-projects.vercel.app",
  projectId: "login-riotgames",
  storageBucket: "login-riotgames.appspot.com",
  messagingSenderId: "842209388239",
  appId: "1:842209388239:web:01b656b93b2e0f779039ba"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider(auth);
export {auth, googleProvider , createUserWithEmailAndPassword , signInWithPopup ,signInWithEmailAndPassword,};