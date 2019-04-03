import React, { createContext, useState, useEffect } from 'react'

export const CartContext = createContext()

const CartProvider = (props) => {
  var cartExists = localStorage.getItem("Cart")

  if (cartExists) {
    var cartInfo = JSON.parse(cartExists)
  } else {
    cartInfo = []
  }

  const [cart, setCart] = useState(cartInfo)

  useEffect(() => {
    setCart(cartInfo)
  }, cartInfo)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider >
  )
}

export default CartProvider