import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import CartItem from './components/cartItem'
import Payment from './components/paymentComponent'
import SignIn from './components/checkoutSignin'

class Cart extends Component {
  render() {
    return (
      <>
        <div id="top-bar"></div>
        <div className="cart-container middle-section">
          <h1 className="playfair-lg mg-v-20">Shopping Cart</h1>

          <CartItem />
          <CartItem />

          <div className="total pd-20 align-right medium-text">
            <p> <span className="lato"> Subtotal:</span>&nbsp;&nbsp;<span className="playfair-lg b price-spans">Ksh 106,426</span></p>
            <p> <span className="lato">V.A.T(16%):</span> <span className="playfair-lg b price-spans">Ksh 0</span></p>

            <p><span className="lato">Total:</span><span className="subtotal playfair-xlg mg-v-20 gold price-spans">Ksh 106,426</span></p>
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
    )
  }
}

export default Cart