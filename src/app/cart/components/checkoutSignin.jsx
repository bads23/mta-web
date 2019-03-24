import React from 'react'

const CheckoutSignin = () => {
  return (
    <>
      <div className="checkout-form">
        <h1 className="playfair-lg align-center">Please Sign In to Complete Checkout</h1>
        <p className="lato-m i align-center mg-v-20">If you are not registered, Click to register</p>
        <form className="form">

          <div className="input1">
            <label>Email:</label>
            <input type="email" placeholder="Email address" name="" value="" />
          </div>

          <div className="input1">
            <label>Password:</label>
            <input type="password" placeholder="Password" name="" value="" />
          </div>
          <button className="btn btn-full mg-v-50">Sign In</button>

        </form>
      </div>
    </>
  )
}

export default CheckoutSignin