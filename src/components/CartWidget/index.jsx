import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import { CartIcon } from './style';

const CartWidget = () => {
    return (
        <CartIcon>
            <ShoppingCartIcon className="icon"/>
            <div className="counter">0</div>
        </CartIcon>
    );
}

export default CartWidget;
