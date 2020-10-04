import React, { useContext} from 'react'
import { CartContext } from './context'
import { UserContext } from '../auth/context'
import { Route, Link } from 'react-router-dom'
import CartItem from './components/cartItem'
import PaymentMethod from './components/paymentMethod'
import format from '../common/functions/formatter'
import Header from '../common/header/header'
import EmptyCart from './components/emptyCart'

export const getTotals = () => {
  const context = useContext(CartContext)
  var cart = [...context.cart]
  var totals = {
    subtotal: 0,
    delivery: 0,
    total: 0
  }

  if (cart.length>0){
    context.cart.forEach(item => {
      totals.subtotal += item.price * item.quantity
      totals.delivery += item.weight < 5 ? (item.quantity*280) : ((((item.weight - 5) * 30)*item.quantity) + (item.quantity*280))
    })
    totals.total = totals.subtotal + totals.delivery
  }
  return totals
}

const Cart = () => {
  const context = useContext(CartContext)
  const userContext = useContext(UserContext)
   
  return (
    <>
      <Header />
      {
        context.cart.length > 0 ? (
          <>
            <div id="top-bar"></div>
            <div className="cart-container middle-section">
              <h1 className="playfair-xlg gold mg-v-20">Shopping Cart</h1>
              {
                context.cart.map(item => (
                  <CartItem item={item} key={item.id} />
                ))
              }

              <div className="total align-right">
                <p>
                  <span className="lato">Total: </span>
                  <span className="subtotal playfair-lg gold">
                    Ksh {format(Math.round(getTotals().subtotal))}
                  </span>
                </p>

                <Route exact path="/cart" render={() => {
                  return (
                    <>
                      {
                        !userContext.user.email ? (
                          <Link to="/login" className="mg-v-20"><button className="btn btn-black">Login to Checkout</button> </Link>
                        ) : (
                          <Link to="/checkout" className="mg-v-20"><button className="btn btn-black">Checkout</button> </Link>
                          )
                      }

                      <Link to="/">
                        <span className="block mg-v-20 grey">
                          <i className="fas fa-angle-left"></i>
                          &nbsp;
                          Keep Shopping
                  </span>
                      </Link>
                    </>)
                }} />
              </div>

              <Route path="/checkout" render={(props) => <PaymentMethod {...props} />} />
              
            </div>
          </>
        ) : (
          <EmptyCart/>
        )
      }
    </>
  )
}

export default Cart