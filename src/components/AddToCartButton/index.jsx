import React, { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon} from '@heroicons/react/outline'
import { AddToCart, Count } from './style'


export const AddToCartButton = ({ stock, className, handleQty }) => {

    const [ counter, setCounter ] = useState(0)

    const onAdd = () => {
        if (counter < stock) {
            setCounter(counter + 1)
            handleQty(counter + 1)
        }
    }

    const onMinus = () => {
        setCounter(counter - 1)
        handleQty(counter - 1)
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

