import React, {useState, useEffect} from 'react'
import Item from '../Item'
import { ItemGrid } from './style'
import { Loading } from '../Loading'

const ItemList = () => {
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('http://localhost:3000/products.json')
            const data = await response.json()
            setTimeout(() => {
                setProducts(data)
                setIsLoading(false)
            }, 500)
        }
        getProducts()
    }, [])

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
        </ItemGrid>
        )
    );
}

export default ItemList;