import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item'
import { ItemGrid } from './style'
import { Loading } from '../Loading'
import{ getProducts } from '../../services/getProducts'

const ItemList = () => {
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        
        getProducts(id).then(items => {
            setProducts(items)
            setIsLoading(false)
        })
    }, [id])

    return (
        isLoading ? (
            <Loading />
        ) : (
        <ItemGrid>
            {products.map(item => (
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