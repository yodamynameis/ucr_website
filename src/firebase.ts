// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Paste your Firebase config here
const firebaseConfig = {
  apiKey: "AIzaSyABN10IeIgcWDPoay2isjWm8A2sqaUCP3M",
  authDomain: "ucr-website-9684d.firebaseapp.com",
  projectId: "ucr-website-9684d",
  storageBucket: "ucr-website-9684d.firebasestorage.app",
  messagingSenderId: "427515644934",
  appId: "1:427515644934:web:b002f032ff343b4ded8787"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firestore database
const db = getFirestore(app);
export default db;
