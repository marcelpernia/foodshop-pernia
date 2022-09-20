import React from 'react';
import { useCartContext } from '../../context/CartContext';
import { Wrapper, Table } from './style';

const Cart = () => {
    const {items} = useCartContext()
    return (
        <Wrapper>
            <Table>
                <tr>
                    <td></td>
                    <td>Product</td>
                    <td>Cantidad</td>
                    <td>Precio</td>
                </tr>
                {items.map(({image, title, qty, price}) => (
                    <tr>
                        <td className="image"><img src={image} alt="" /></td>
                        <td>{title}</td>
                        <td>{qty}</td>
                        <td>{price}</td>
                    </tr>
                ))}
            </Table>
        </Wrapper>
    );
}

export default Cart;
