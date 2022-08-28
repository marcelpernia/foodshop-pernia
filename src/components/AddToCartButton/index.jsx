import React, { useState } from 'react'
import { PlusCircleIcon, MinusCircleIcon, TrashIcon} from '@heroicons/react/outline'
import { AddToCart, Count } from './style'


export const AddToCartButton = ({ stock, initial }) => {

    const [ counter, setCounter ] = useState(Number(initial))

    const onAdd = (operation) => {
        operation === '+' && counter < Number(stock) && setCounter(counter + 1)
        operation === '-' && setCounter(counter - 1)
    }

    return (
        <>
            {counter == 0 ? (
                <AddToCart onClick={() => onAdd('+') }>
                    <span>Add to Cart</span>
                    <PlusCircleIcon className="icon"/>
                </AddToCart>
            ) : (
                <Count>
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

