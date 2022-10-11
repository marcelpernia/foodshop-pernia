import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, updateDoc } from 'firebase/firestore';
import {products} from './products';

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

export const save = async (collectionName, item) => {
  const docRef = await addDoc(collection(db, collectionName), item)
  return docRef.id
}

export const update = async (collectionName, id, data) => {
  const docRef = await updateDoc(doc(db, collectionName, id), data)
}

const uploadProducts = async() => {
  for(const product of products) {
    await save('products', product)
  }
}
// uploadProducts()

