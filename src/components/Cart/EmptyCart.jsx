import React from 'react';
import { EmojiSadIcon } from '@heroicons/react/outline';
import { Empty } from './style';
import { Link } from 'react-router-dom'

const EmptyCart = () => {
    return (
        <Empty>
            <EmojiSadIcon className="icon"/>
            <h4>Empty cart</h4>
            <p>Please add some products</p>
            <div>
                <Link to='/' className="button">Go to the store</Link>
            </div>
        </Empty>
    );
}

export default EmptyCart;
