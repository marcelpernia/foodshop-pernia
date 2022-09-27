import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item'
import { ItemGrid } from './style'
import { Loading } from '../Loading'
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase'

const ItemList = () => {
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        const getProducts = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, 'products'));
                const data = querySnapshot.docs.map(doc => doc = {id: doc.id, ...doc.data()})
                const productsFiltered = () => {
                    return id == undefined ? data : data.filter((item) => item.category == id) 
                }
                setProducts(productsFiltered)
            }
            catch (err) {
                console.log(err)
            }
            finally {
                setIsLoading(false)
            }
        }
        getProducts()

    }, [id])

    return (
        isLoading ? (
            <Loading />
        ) : (
        <ItemGrid>
            {products?.map(item => (
                <Item 
                    key={item.id}
                    id={item.id}
                    title={item.title}
                    stock={item.stock}
                    price={item.price}
                    image={item.image}
                />
            ))}
            {!products.length && 'Sorry, no matches.'}
        </ItemGrid>
        )
    );
}

export default ItemList;