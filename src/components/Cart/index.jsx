import React from 'react';
import { useCartContext } from '../../context/CartContext';
import EmptyCart from './EmptyCart';
import { Wrapper, Table } from './style';
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/outline';

const Cart = () => {
    const {items, deleteItem} = useCartContext()
    const total = items.reduce((acc, current) => (acc + current.price * current.qty), 0)

    return (
        <Wrapper>
            <h1 className="section-title">Shopping Cart</h1>

            {items.length > 0 ? (
                <Table>
                    <tr>
                        <th></th>
                        <th>Product name</th>
                        <th>Qty</th>
                        <th>Unit Price</th>
                        <th>Sub-total</th>
                        <th></th>
                    </tr>
                    {items.map(({id,image, title, qty, price}) => (
                        <tr>
                            <td className="image">
                            <Link to={`/product/${id}`}>
                                <img src={image} alt={title} />
                            </Link>
                            </td>
                            <td>{title}</td>
                            <td>{qty}</td>
                            <td>${price}</td>
                            <td>${price*qty}</td>
                            <td>
                                <TrashIcon 
                                onClick={() => deleteItem(id)} 
                                className="delete"/>
                            </td>
                        </tr>
                    ))}
                    <tr>
                        <th colspan="4" className="right">Total</th>
                        <th colspan="2" className="left">${total.toFixed(2)}</th>
                    </tr>
                </Table>
                ) : (
                  <EmptyCart />
                )}
        </Wrapper>
    );
}

export default Cart;
