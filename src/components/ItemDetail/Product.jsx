import React from 'react';
import { AddToCartButton } from '../AddToCartButton'
import { Image, Title, AddToCart, Price, Details } from './style'

export const Product = ({image, title, price, stock, details}) => {
    return (
        <>
            <Image>
                <img src={image} alt="" />
            </Image>
            <Title>{title}</Title>
            <AddToCart>
                <Price>
                    {price}
                </Price>
                <AddToCartButton 
                    stock={stock}
                    className="add-to-cart-btn"
                />
            </AddToCart>
            <Details>
                <h3>Details</h3>
                <p>{details}</p>
            </Details>
        </>
    );
}
