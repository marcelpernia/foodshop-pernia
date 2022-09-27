import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCm-6s9BxsK3uMU5EIAQ6sRfAewEtPxZn4",
  authDomain: "foodshop-24d16.firebaseapp.com",
  projectId: "foodshop-24d16",
  storageBucket: "foodshop-24d16.appspot.com",
  messagingSenderId: "605235185866",
  appId: "1:605235185866:web:57f3d51c78a8008cd40c33",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore();

// REACT_APP_PROJECT_ID
// REACT_APP_API_KEY