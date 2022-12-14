import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { ProductItem, Image, Title, Price, Stock } from './style'
import {AddToCartButton} from '../AddToCartButton';
import { useCartContext } from "../../context/CartContext";

const Item = ({id, title, price, image, stock}) => {   
    return (
        <ProductItem>
            <Image>
                <Link to={`/product/${id}`}>
                    <img src={image} alt={title} />
                </Link>
            </Image>
            <Title>{title}</Title>
            <Stock>{stock} in stock</Stock>
            <Price>${price}</Price>
            <AddToCartButton 
                stock={stock}
                product={{id, title, image, price, stock}}
            />
        </ProductItem>
    );
}

export default Item;



