import React from 'react';
import { useCartContext } from '../../context/CartContext';
import EmptyCart from './EmptyCart';
import { Table, Container, Columns, Summary } from './style';
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/outline';

const Cart = () => {
    const {items, deleteItem} = useCartContext()
    const totalCalculated = () => {
        const total = items.reduce((acc, current) => (acc + current.price * current.qty), 0)
        return total.toFixed(2)
    }

    return (
        <Container>
            <h1 className="section-title">Your Cart</h1>

            {items.length > 0 ? (
                    <Columns>
                        <div className="column">
                            <Table>
                                <thead>
                                    <tr>
                                        <th colSpan="2" className="left">Product</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Total</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {items.map(({id,image, title, qty, price}) => (
                                        <tr key={id}>
                                            <td className="image">
                                            <Link to={`/product/${id}`}>
                                                <img src={image} alt={title} />
                                            </Link>
                                            </td>
                                            <td className="left">{title}</td>
                                            <td>{'$'}{price}</td>
                                            <td>{qty}</td>
                                            <td>{'$'}{price*qty}</td>
                                            <td className="min-w">
                                                <TrashIcon 
                                                onClick={() => deleteItem(id)} 
                                                className="delete"/>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                            
                            <div className="right mt-2">
                                <button className="link">Clear cart</button>
                            </div>
                        </div>
                        <div className="column narrow">
                            <Summary>
                                <h3>Order summary</h3>

                                <Table>
                                    <tbody>
                                        <tr>
                                            <th className="left">Items</th>
                                            <td className="right">{items.length}</td>
                                        </tr>
                                        <tr>
                                            <th className="left">Subtotal</th>
                                            <td className="right">{'$'}{totalCalculated()}</td>
                                        </tr>
                                        <tr>
                                            <th className="left">Shipping</th>
                                            <td className="right">Free</td>
                                        </tr>
                                    </tbody>
                                </Table>

                                <h3 className="mt-2">Total</h3>
                                <div className="total">{'$'}{totalCalculated()}</div>
                            </Summary>
                            <button className="button mt-1 fullWidth">Go to checkout</button>
                        </div>
                    </Columns>
                ) : (
                  <EmptyCart />
                )}
        </Container>
    );
}

export default Cart;
