import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [items, setItems] = useState([])
    
    const increment = (product) => {
        const itemFound = items.find(item => item.id === product.id)

        if(itemFound) {
            itemFound.qty++
            setItems([...items])
        } else {
            setItems([...items, product])
        }
    }
   
    const decrement = (product) => {
        const itemFound = items.find(item => item.id === product.id)
        itemFound.qty--
        setItems([...items])
        itemFound.qty === 0 && deleteItem(itemFound.id)
    }

    const deleteItem = (id) => {
        const query = items.filter(item => item.id !== id)
        setItems(query)
    }

    const clearCart = () => {
        setItems([])
    }

    const counter = items.reduce((acc, current) => (acc + current.qty), 0)
    const totalCart = items.reduce((acc, current) => (acc + current.price * current.qty), 0)
    const total = totalCart.toFixed(2)

    return (
        <CartContext.Provider value={{items, increment, decrement, deleteItem, clearCart, counter, total}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider; 
