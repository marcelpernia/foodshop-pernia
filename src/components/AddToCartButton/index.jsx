import React, { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon} from '@heroicons/react/outline'
import { AddToCart, Count } from './style'
import { useCartContext } from '../../context/CartContext'


export const AddToCartButton = ({ stock, className, handleQty, product }) => {

    const { items, increment, decrement } = useCartContext()

    const [ counter, setCounter ] = useState(0)

    const onAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            handleQty && handleQty(counter + 1)
            increment({...product, qty:counter + 1})
        }
    }

    const onMinus = () => {
        setCounter(counter - 1)
        handleQty && handleQty(counter - 1)
        decrement({...product, qty:counter - 1})
    }

    return (
        <>
            {counter == 0 ? (
                <AddToCart className={className} onClick={() => onAdd() }>
                    <span>Add to Cart</span>
                    <PlusCircleIcon className="icon"/>
                </AddToCart>
            ) : (
                <Count className={className}>
                    <button onClick={() => onMinus() }>
                        {counter == 1 ? (
                            <TrashIcon className="icon"/>
                        ) : (
                            <MinusCircleIcon className="icon"/>
                        )}
                    </button>
                    <span onClick={() => onAdd() }>{counter}</span>
                    <button onClick={() => onAdd() }>
                        <PlusCircleIcon className="icon"/>
                    </button>
                </Count>
            )}
        </>
    )
}

