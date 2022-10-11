import React, { useState } from 'react';
import { useCartContext } from '../../context/CartContext';
import EmptyCart from './EmptyCart';
import { Columns } from './style';
import { Link } from 'react-router-dom'
import OrderSummary from './OrderSummary';
import ProductTable from './ProductTable'
import Form from './Form';

const Cart = () => {
    const { items } = useCartContext()
    const [orderPlaced, setOrderPlaced] = useState(false)

    const handleButton = () => {
        setOrderPlaced(true)
    }

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
                        {orderPlaced ? (
                            <Form />
                        ) : (
                            <button onClick={handleButton} className="button mt-1 fullWidth">Place order</button>
                        )}
                    </div>
                </Columns>
            ) : (
                <EmptyCart />
            )}
        </div>
    );
}

export default Cart;
