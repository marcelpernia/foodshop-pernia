import { collection, getDocs } from "firebase/firestore";
import { db } from '../firebase'

export const getProducts = async (categoryId) => {
    const querySnapshot = await getDocs(collection(db, 'products'));
    const data = querySnapshot.docs.map(doc => doc = {id: doc.id, ...doc.data()})
    const productsFiltered = () => {
        return categoryId == undefined ? data : data.filter((item) => item.category == categoryId) 
    }
    return productsFiltered
}