import React from 'react';
import { Table, Summary } from './style';
import { useCartContext } from '../../context/CartContext';

const OrderSummary = () => {

    const { counter, total } = useCartContext()

    return (
        <Summary>
            <h3>Order summary</h3>

            <Table>
                <tbody>
                    <tr>
                        <th className="left">Items</th>
                        <td className="right">{counter}</td>
                    </tr>
                    <tr>
                        <th className="left">Subtotal</th>
                        <td className="right">{'$'}{total}</td>
                    </tr>
                    <tr>
                        <th className="left">Shipping</th>
                        <td className="right">Free</td>
                    </tr>
                </tbody>
            </Table>

            <h3 className="mt-2">Total</h3>
            <div className="total">{'$'}{total}</div>
        </Summary>
    );
}

export default OrderSummary;
