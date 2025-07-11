// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBScQ3hITGBjR3zLCeHYEi8qd8C7H9RweQ",
  authDomain: "difusores-e7977.firebaseapp.com",
  projectId: "difusores-e7977",
  storageBucket: "difusores-e7977.firebasestorage.app",
  messagingSenderId: "74280770172",
  appId: "1:74280770172:web:32330035b8d08156e887f9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const dataBase = getFirestore(app)