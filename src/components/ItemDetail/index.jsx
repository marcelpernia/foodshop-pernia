import React, {useState, useEffect} from 'react'
import Item from '../Item'
import { Container, Image, Title, AddToCart, Price, Description } from './style'
import {AddToCartButton} from '../AddToCartButton'

const ItemDetails = () => {

    const [product, setProduct] = useState(null)

    useEffect(() => {
        const getItem = async () => {
            const response = await fetch('./data.json')
            const data = await response.json()
            const item = data.filter(item => item.id == 1)
            setProduct(...item)
        }
        getItem()
    }, [])

    return (
        <Container>
            <Image>
                <img src={product.image.large} alt={product.title} />
            </Image>
            <Title>{product.title}</Title>
            <AddToCart>
                <Price>
                    {product.price}
                </Price>
                <AddToCartButton 
                    initial={0}
                    stock={product.stock}
                    className="add-to-cart-btn"
                />
            </AddToCart>
            <Description>
                <h3>Description</h3>
                <p>{product.description}</p>
            </Description>
        </Container>
    );
}

export default ItemDetails;