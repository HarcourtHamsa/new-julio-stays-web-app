// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBswWJVbvGE3LWLJreIYLgfVfEUR8CUz6g",
  authDomain: "julio-stays.firebaseapp.com",
  projectId: "julio-stays",
  storageBucket: "julio-stays.appspot.com",
  messagingSenderId: "927367970838",
  appId: "1:927367970838:web:5e10560f2457c0f8307537",
  measurementId: "G-CZ94MS7CLW"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

