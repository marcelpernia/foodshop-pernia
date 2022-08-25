import React from 'react'
import { ItemCount } from './ItemCount/ItemCount.jsx'

const ItemListContainer = ({greeting}) => {
    const demoStyle = {
        textAlign: 'center', 
        paddingTop: '50px'
    }
    return (
        <div style={demoStyle}>
            <h3>{greeting}</h3>
            <br />
            <ItemCount 
                initial="0"
                stock="10"
            />
        </div>
    );
}

export default ItemListContainer;