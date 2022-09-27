import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "foodshop-24d16.firebaseapp.com",
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: "foodshop-24d16.appspot.com",
  messagingSenderId: "605235185866",
  appId: "1:605235185866:web:57f3d51c78a8008cd40c33",
};

initializeApp(firebaseConfig);
export const db = getFirestore();