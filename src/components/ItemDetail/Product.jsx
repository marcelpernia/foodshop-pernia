import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import { AddToCartButton } from '../AddToCartButton'
import { Image, Title, AddToCart, Price, Details, SeeCartLink, Stock } from './style';
import { useCartContext } from "../../context/CartContext";

export const Product = ({id, image, title, price, stock, details}) => {
    const [qty, setQty] = useState(0)

    const handleQty = (value) => {
        setQty(value)
    }

    // const {items} = useCartContext()
    
    // useEffect(() => {
    //     const product = items.find(item => item.id === id);
    //     product && setQty(product.qty)
    // }, [id, items])

    return (
        <>
            <Image>
                <img src={image} alt="" />
            </Image>
            <Title>{title}</Title>
            <Stock>{stock} in stock</Stock>
            <AddToCart>
                <Price>
                    {'$'}{price}
                </Price>
                {qty > 0 && (
                    <SeeCartLink>
                        <Link to="/cart" className="link">See Cart</Link>
                    </SeeCartLink>
                )}
                <AddToCartButton
                    handleQty={handleQty}
                    stock={stock}
                    className="add-to-cart-btn"
                    product={{id, title, image, price, stock}}
                />
            </AddToCart>
            <Details>
                <h3>Details</h3>
                <p>{details}</p>
            </Details>
        </>
    );
}
