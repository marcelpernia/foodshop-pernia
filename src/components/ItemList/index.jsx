import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import Item from '../Item'
import { ItemGrid } from './style'
import { Loading } from '../Loading'

const ItemList = () => {
    const [products, setProducts] = useState(null)
    const [isLoading, setIsLoading] = useState(true)

    const {id} = useParams()

    useEffect(() => {
        setIsLoading(true)
        const getProducts = async () => {
            const response = await fetch('http://localhost:3000/products.json')
            const data = await response.json()
            const productsFiltered = () => {
                return id == undefined ? data : data.filter((item) => item.category == id) 
            }
            setTimeout(() => {
                setProducts(productsFiltered())
                setIsLoading(false)
            }, 500)
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
            {products.length == 0 && `Sorry, we can't find any items that match ${id}`}
        </ItemGrid>
        )
    );
}

export default ItemList;