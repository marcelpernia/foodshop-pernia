import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './style'
import { Back } from './Back'
import { Product } from './Product'
import { Loading } from '../Loading'
import { doc, getDoc } from "firebase/firestore";
import { db } from '../../firebase'

const ItemDetails = () => {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [notFound, setNotFound] = useState(false)
    const {id} = useParams()

    useEffect(() => {
        const getItem = async () => {
            try {
                const querySnapshot = await getDoc(doc(db, 'products', id));

                if(querySnapshot.exists()) {
                    const data = querySnapshot.data()
                    setItem(data)
                }
                else {
                    setNotFound(true)
                }
            }
            catch(error) {
                console.log(error)
            }
            finally {
                setIsLoading(false)
            }
        }
        getItem()
    }, [id])

    return (
        <Container>
            <Back />
            {isLoading && <Loading />}
            {notFound && 'Not found'}
            {item && (
                <Product
                    id={id} 
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    stock={item.stock}
                    details={item.details}
                />
            )}
        </Container>
    );
}

export default ItemDetails;