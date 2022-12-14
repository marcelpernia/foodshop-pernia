import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    const isInCart = (id) => {
        return items.find(item => item.id === id)
    }
    
    const increment = (product) => {
        if(!!isInCart(product.id)) {
            const item = isInCart(product.id)
            item.qty++
            setItems([...items])
        } else {
            setItems(prevState => [...prevState, product])
        }
    }
   
    const decrement = (product) => {
        const item = isInCart(product.id)
        item.qty--
        setItems([...items])
        item.qty === 0 && deleteItem(item.id)
    }

    const deleteItem = (id) => {
        const item = items.filter(item => item.id !== id)
        setItems(item)
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
