import React, { useContext } from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './components/cartItem'
import Payment from './components/paymentComponent'
// import SignIn from './components/checkoutSignin'
import format from '../common/functions/formatter'

import { CartContext } from './context'

const getTotals = () => {
  const context = useContext(CartContext)
  var cart = [...context.cart]
  var totals = {
    subtotal: 0
  }
  if (cart.length > 0) {
    context.cart.forEach(item => {
      totals.subtotal += item.price * item.quantity
    })
  }
  return totals
}


const Cart = () => {
  const context = useContext(CartContext)
  return (
    <>
      {
        context.cart.length > 0 ? (
          <>
            <div id="top-bar"></div>
            <div className="cart-container middle-section">
              <h1 className="playfair-lg mg-v-20">Shopping Cart</h1>

              {
                context.cart.map(item => (
                  <CartItem item={item} key={item.id} />
                ))

              }

              <div className="total pd-20 align-right medium-text">
                <p> <span className="lato">Subtotal:</span>&nbsp;&nbsp;<span className="playfair-lg b price-spans">Ksh {format(getTotals().subtotal)}</span></p>
                <p> <span className="lato">V.A.T(16%):</span> <span className="playfair-lg b price-spans">Ksh {format(Math.round(getTotals().subtotal * .16))}</span></p>

                <p><span className="lato">Total:</span><span className="subtotal playfair-xlg mg-v-20 gold price-spans">Ksh {format(Math.round(getTotals().subtotal + (getTotals().subtotal * .16)))}</span></p>
                <Link to="checkout" className="mg-v-20"><button className="btn btn-black">Checkout</button> </Link>
                <Link to="/">
                  <span className="block mg-v-20 grey">
                    <i className="fas fa-angle-left"></i>
                    &nbsp;
                    Keep Shopping
            </span>
                </Link>
              </div>

              {/* <SignIn />
        <Payment /> */}

              <Route exact path="/checkout" render={(props) => <Payment {...props} />} />
            </div>
          </>
        ) : (
            <>
              <div className="cart-container middle-section align-center">
                <h1 className="playfair-lg mg-v-20">Your Shopping Cart is empty!</h1>
                <Link to='/'>
                  <button className="btn-black align-center mg-v-20">Start Shopping</button>
                </Link>
              </div>
            </>
          )
      }
    </>
  )
}

export default Cart