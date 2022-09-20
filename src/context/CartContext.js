import { createContext, useContext, useState } from 'react'

export const CartContext = createContext()
export const useCartContext = () => useContext(CartContext)

const CartProvider = ({children}) => {
    const [items, setItems] = useState([])

    
    const addItem = (product) => {
        const itemFound = items.find(item => item.id == product.id)

        if(itemFound) {
            itemFound.qty++
            setItems([...items])
        } else {
            setItems([...items, product])
        }
    }
   
    const removeItem = (product) => {
        const itemFound = items.find(item => item.id == product.id)
        itemFound.qty--
        setItems([...items])
    }

    return (
        <CartContext.Provider value={{items, addItem, removeItem}}>
            {children}
        </CartContext.Provider>
    )
}
export default CartProvider; 
