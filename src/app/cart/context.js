import React, { createContext, useState, useEffect, useContext } from 'react'
import format from '../common/functions/formatter'

export const CartContext = createContext()

export const CartTotals = () => {

  const context = useContext(CartContext)
  var cart = [...context.cart]

  var totals = {
    subtotal: 0,
    vat: 0,
    total: 0
  }

  const update = () => {
    if (cart.length > 0) {
      cart.forEach(item => {
        totals.subtotal += item.price * item.quantity
        totals.vat = format(Math.round(totals.subtotal * .16))
        totals.total = format(Math.round(totals.subtotal + (totals.subtotal * 0.16)))
      })
    }
  }
  update()
  return totals
}

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
  }, [cartInfo])

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {props.children}
    </CartContext.Provider >
  )
}

export default CartProvider