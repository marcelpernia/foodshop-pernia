import React from 'react';
import { Table } from './style';
import { Link } from 'react-router-dom'
import { TrashIcon } from '@heroicons/react/outline';
import { useCartContext } from '../../context/CartContext';

const ProductsTable = () => {
    const {items, deleteItem, clearCart} = useCartContext()
    return (
        <>
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
                <button className="link" onClick={clearCart}>Clear cart</button>
            </div>
        </>
    );
}

export default ProductsTable;
