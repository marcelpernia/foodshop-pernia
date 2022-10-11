import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Container } from './style'
import { Back } from './Back'
import { Product } from './Product'
import { Loading } from '../Loading'
import { getProduct } from '../../services/getProduct'

const ItemDetails = () => {
    const [item, setItem] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const {id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        getProduct(id).then(product => {
            setItem(product)
            setIsLoading(false)
        })
    }, [id])

    return (
        <Container>
            <Back />
            {isLoading && <Loading />}
            {item ? (
                <Product
                    id={id} 
                    image={item.image}
                    title={item.title}
                    price={item.price}
                    stock={item.stock}
                    details={item.details}
                />
            ) : (
                'Item not found'
            )}
        </Container>
    );
}

export default ItemDetails;