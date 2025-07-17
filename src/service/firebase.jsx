// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXtzTA7tp5p7SmAVTEzUgvxaIfYQzdxq8",
  authDomain: "difusores-d0806.firebaseapp.com",
  projectId: "difusores-d0806",
  storageBucket: "difusores-d0806.firebasestorage.app",
  messagingSenderId: "156435510766",
  appId: "1:156435510766:web:d6741d0153b3c270be0aff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)