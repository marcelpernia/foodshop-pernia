import React from 'react';
import { Table, Summary } from './style';
import { useCartContext } from '../../context/CartContext';

const OrderSummary = () => {

    const { items } = useCartContext()
    
    const totalCalculated = () => {
        const total = items.reduce((acc, current) => (acc + current.price * current.qty), 0)
        return total.toFixed(2)
    }

    return (
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
    );
}

export default OrderSummary;
