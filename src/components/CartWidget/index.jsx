import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { CartIcon } from './style';
import {useCartContext} from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const { counter } = useCartContext();
    return (
        <CartIcon hasItems={counter}>
            <Link to="/cart">
                <ShoppingCartIcon className="icon"/>
                <div className="counter">{counter}</div>
            </Link>
        </CartIcon>
    );
}

export default CartWidget;
