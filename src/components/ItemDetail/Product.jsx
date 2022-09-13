import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { AddToCartButton } from '../AddToCartButton'
import { Image, Title, AddToCart, Price, Details, SeeCartLink } from './style'

export const Product = ({image, title, price, stock, details}) => {
    const [qty, setQty] = useState(1)

    const handleQty = (value) => {
        setQty(value)
    }
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
                {qty > 0 && (
                    <SeeCartLink>
                        <Link to="/cart">See Cart</Link>
                    </SeeCartLink>
                )}
                <AddToCartButton 
                    stock={stock}
                    className="add-to-cart-btn"
                    handleQty={handleQty}
                />
            </AddToCart>
            <Details>
                <h3>Details</h3>
                <p>{details}</p>
            </Details>
        </>
    );
}
