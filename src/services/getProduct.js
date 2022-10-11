import { doc, getDoc } from "firebase/firestore";
import { db } from '../firebase'

export const getProduct = async(id) => {
    const querySnapshot = await getDoc(doc(db, 'products', id));

    if(querySnapshot.exists()) {
        const data = querySnapshot.data()
        return data
    }
}