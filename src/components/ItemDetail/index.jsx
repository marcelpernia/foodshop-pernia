import React, {useState, useEffect} from 'react'
import { useParams, Link } from 'react-router-dom'
import { Container } from './style'
import { Back } from './Back'
import { Product } from './Product'
import { Loading } from '../Loading'

const ItemDetails = () => {

    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        const getItem = async () => {
            const response = await fetch('http://localhost:3000/products.json')
            const data = await response.json()
            const item = data.filter(item => item.id == id)
            
            setTimeout(() => {
                setItem(...item)
                setIsLoading(false)
            }, 500)
        }
        getItem()
    }, [])

    return (
        <Container>
            {isLoading && <Loading />}
            {item && (
                <>
                    <Back />
                    <Product
                        id={id} 
                        image={item.image}
                        title={item.title}
                        price={item.price}
                        stock={item.stock}
                        details={item.details}
                    />
                </>    
            )}
        </Container>
    );
}

export default ItemDetails;