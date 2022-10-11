import React, { useState, useEffect } from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon} from '@heroicons/react/outline'
import { AddToCart, Count } from './style'
import { useCartContext } from '../../context/CartContext'


export const AddToCartButton = ({ stock, className, product }) => {

    const { items, increment, decrement } = useCartContext()
    const [ counter, setCounter ] = useState(0)

    const handleIncrement = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            increment({...product, qty:counter + 1})
        }
    }

    const handleDecrement = () => {
        setCounter(counter - 1)
        decrement({...product, qty:counter - 1})
    }

    useEffect(() => {
        const productInCart = items.find(item => item.id === product.id);
        productInCart && setCounter(productInCart.qty)
    }, [])

    return (
        <>
            {counter === 0 ? (
                <AddToCart className={className} onClick={handleIncrement}>
                    {product.stock !== 0 ? (
                        <>
                            <span>Add to Cart</span>
                            <PlusCircleIcon className="icon"/>
                        </>
                    ) : (
                        <span>Out of stock</span>
                    )}
                </AddToCart>
            ) : (
                <Count className={className}>
                    <button onClick={handleDecrement}>
                        {counter === 1 ? (
                            <TrashIcon className="icon"/>
                        ) : (
                            <MinusCircleIcon className="icon"/>
                        )}
                    </button>
                    <span onClick={handleIncrement}>{counter}</span>
                    <button onClick={handleIncrement}>
                        <PlusCircleIcon className="icon"/>
                    </button>
                </Count>
            )}
        </>
    )
}

