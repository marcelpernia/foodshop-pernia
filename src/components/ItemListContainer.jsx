import React from 'react';

const ItemListContainer = ({greeting}) => {
    const demoStyle = {
        textAlign: 'center', 
        paddingTop: '50px'
    }
    return (
        <div style={demoStyle}>
            <h3>{greeting}</h3>
        </div>
    );
}

export default ItemListContainer;