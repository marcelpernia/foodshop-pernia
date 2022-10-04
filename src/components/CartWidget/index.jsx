import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { CartIcon } from './style';
import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const {items, counter} = useCartContext()
    const length = items.filter(item => item.qty > 0).length
    return (
        <CartIcon hasItems={length}>
            <Link to="/cart">
                <ShoppingCartIcon className="icon"/>
                <div className="counter">{counter}</div>
            </Link>
        </CartIcon>
    );
}

export default CartWidget;
