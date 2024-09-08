import React, { createContext, useState } from 'react'
import toast from 'react-hot-toast';

export const CartContext = createContext(null)

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCartHandler = (product) => {
        setCart(prev => [...prev, product])
        toast.success('Added to Cart')
    }

    const removeHandler = (id) => {
        const remove = cart.filter(product => product._id !== id)
        setCart(remove)
    }

    console.log(cart)

  return (
    <CartContext.Provider value={{cart, setCart, addToCartHandler, removeHandler}}>
        {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider