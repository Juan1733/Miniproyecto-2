// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0EGQl8IHsMcRdpB8jX0WLbfQxEqN5-pM",
  authDomain: "filmed-376b7.firebaseapp.com",
  projectId: "filmed-376b7",
  storageBucket: "filmed-376b7.appspot.com",
  messagingSenderId: "1025063031851",
  appId: "1:1025063031851:web:2fa4f53bb236b81a3b066e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth.app();
export const db = getFirestore.app();
export const store = getStorage.app();

export const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: "select_account" });