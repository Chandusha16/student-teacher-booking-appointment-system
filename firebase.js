 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFDcIWlB0gaGAt3BNlEGtRH28PjuYAwuY",
  authDomain: "student-teacher-appointm-b542e.firebaseapp.com",
  projectId: "student-teacher-appointm-b542e",
  storageBucket: "student-teacher-appointm-b542e.firebasestorage.app",
  messagingSenderId: "132556851380",
  appId: "1:132556851380:web:bb4a452a227ef2141cafe1",
  measurementId: "G-H5WE772TBD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);