import React, { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon} from '@heroicons/react/outline'
import { AddToCart, Count } from './style'


export const AddToCartButton = ({ stock, initial, className }) => {

    const [ counter, setCounter ] = useState(initial)

    const onAdd = (operation) => {
        operation === '+' && counter < stock && setCounter(counter + 1)
        operation === '-' && setCounter(counter - 1)
    }

    return (
        <>
            {counter == 0 ? (
                <AddToCart className={className} onClick={() => onAdd('+') }>
                    <span>Add to Cart</span>
                    <PlusCircleIcon className="icon"/>
                </AddToCart>
            ) : (
                <Count className={className}>
                    <button onClick={() => onAdd('-') }>
                        {counter == 1 ? (
                            <TrashIcon className="icon"/>
                        ) : (
                            <MinusCircleIcon className="icon"/>
                        )}
                    </button>
                    <span onClick={() => onAdd('+') }>{counter}</span>
                    <button onClick={() => onAdd('+') }>
                        <PlusCircleIcon className="icon"/>
                    </button>
                </Count>
            )}
        </>
    );
}

