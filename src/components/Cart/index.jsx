import React from 'react';
import { useCartContext } from '../../context/CartContext';
import EmptyCart from './EmptyCart';
import { Columns } from './style';
import { Link } from 'react-router-dom'
import OrderSummary from './OrderSummary';
import ProductTable from './ProductTable'

const Cart = () => {
    const { items } = useCartContext()

    return (
        <div className="wrap">
            <h1 className="section-title">Your Cart</h1>

            {items.length > 0 ? (
                <Columns>
                    <div className="column">
                        <ProductTable />
                    </div>
                    <div className="column narrow">
                        <OrderSummary />
                        <button className="button mt-1 fullWidth">Go to checkout</button>
                    </div>
                </Columns>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
}

export default Cart;
