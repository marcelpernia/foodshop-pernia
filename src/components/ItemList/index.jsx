import React, {useState, useEffect} from 'react'
import Item from '../Item'
import { ItemGrid } from './style'

const ItemList = () => {
    const [products, setProducts] = useState(null)

    useEffect(() => {
        const promesa = new Promise((resolve) => {
            setTimeout(() =>{
                resolve([
                    {
                        id: 1,
                        title: 'Organic Lemon',
                        stock: 20,
                        description: '',
                        price: '$1.20 each',
                        pictureUrl: '/img/lemon.jpg',
                    },
                    {
                        id: 2,
                        title: 'Gala Apple',
                        stock: 8,
                        description: '',
                        price: '$0.71 each',
                        pictureUrl: '/img/apple.jpg',
                    },
                ])
            }, 2000)
        });

        promesa.then((results) => setProducts(results))
    }, [])

    return (
        <ItemGrid>
            {products?.map(item => (
                <Item 
                    key={item.id}
                    title={item.title}
                    stock={item.stock}
                    price={item.price}
                    image={item.pictureUrl}
                />
            ))}
        </ItemGrid>
    );
}

export default ItemList;