import React, {useState, useEffect} from 'react'
import Item from '../Item'
import { ItemGrid } from './style'

const ItemList = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const getProducts = async () => {
            const response = await fetch('./data.json')
            const data = await response.json()

            setProducts(data)
        }
        getProducts()
    }, [])

    return (
        <ItemGrid>
            {products?.map(item => (
                <Item 
                    key={item.id}
                    title={item.title}
                    stock={item.stock}
                    price={item.price}
                    image={item.image.small}
                />
            ))}
        </ItemGrid>
    );
}

export default ItemList;