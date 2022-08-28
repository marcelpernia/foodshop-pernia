import React from 'react'
import { ProductItem, Image, Title, Price, Stock } from './style'
import {AddToCartButton} from '../AddToCartButton';

const Item = ({title, price, image, stock}) => {
    return (
        <ProductItem>
            <Image>
                <img src={image} alt={title} />
            </Image>
            <Title>{title}</Title>
            <Stock>{stock} in stock</Stock>
            <Price>{price}</Price>
            <AddToCartButton 
                stock={stock}
                initial={0}
            />
        </ProductItem>
    );
}

export default Item;



