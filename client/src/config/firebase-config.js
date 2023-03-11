// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA1dHNmg6CyCiW8O8QGcKWNPISJpBdu974",
  authDomain: "crescendo-553c6.firebaseapp.com",
  projectId: "crescendo-553c6",
  storageBucket: "crescendo-553c6.appspot.com",
  messagingSenderId: "1042811730043",
  appId: "1:1042811730043:web:e1acab0e04a493cc198ade",
  measurementId: "G-NYL3M11MCB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage(app);