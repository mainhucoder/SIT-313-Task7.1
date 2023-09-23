// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDY37cG1Q4erdS7rFRQnrkWOBSOIP2F-c8",
  authDomain: "udaytask-bf6f0.firebaseapp.com",
  projectId: "udaytask-bf6f0",
  storageBucket: "udaytask-bf6f0.appspot.com",
  messagingSenderId: "237619357299",
  appId: "1:237619357299:web:d1434ea3e2cda0d76aec06",
  measurementId: "G-Q2Q3EM8T6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()

export { app, auth };