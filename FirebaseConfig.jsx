import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDlPJ2uowe0lVd4yej6nlVKGLU5xS3LS5U",
  authDomain: "promoko-37e8f.firebaseapp.com",
  projectId: "promoko-37e8f",
  storageBucket: "promoko-37e8f.appspot.com",
  messagingSenderId: "130576682530",
  appId: "1:130576682530:web:ca0c7c3000b5ecb8f3047b",
  measurementId: "G-9SS82BDYQ2"
};

const app = initializeApp(firebaseConfig);
export const database = getAuth(app);