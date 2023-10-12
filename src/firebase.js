// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyCjyUwFFHa6BXXBhguyaDZKjM5OSWmbsAI",
  authDomain: "busybuy-a16ca.firebaseapp.com",
  projectId: "busybuy-a16ca",
  storageBucket: "busybuy-a16ca.appspot.com",
  messagingSenderId: "157613670833",
  appId: "1:157613670833:web:9757fe4a648bd8aec93d90",
  measurementId: "G-N4TZFJBHN7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
