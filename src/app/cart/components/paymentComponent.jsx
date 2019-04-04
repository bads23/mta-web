import React from 'react'
import { CartTotals } from '../context'
import SignIn from './checkoutSignin'

const Payment = () => {
  const loggedIn = false
  return (
    <>
      {!loggedIn ? (
        <SignIn />
      ) : (
          <>
            <div className="checkout-form">
              <h1 className="playfair-lg align-center">Confirm Payment</h1>
              <p className="lato-m i align-center mg-v-20">Pick your preffered method of payment</p>

              <form className="form">

                <div className="mg-v-20">
                  <h2 className="lato-m b radio radio-checked mg-v-10">Mpesa</h2>
                  <p className="lato-m">Pay Ksh {CartTotals().total} via Mpesa paybill. Enter your phone number to make the payment.</p>

                  <div className="input1">
                    <label>Phone Number:</label>
                    <input type="email" placeholder="Enter the phone number you'll use to pay" name="" value="" onChange={() => { }} />
                  </div>

                </div>


                <div className="grey">
                  <h2 className="lato-m b radio radio-unchecked mg-v-10">Pay on Delivery</h2>
                  <p className="lato-m">Pay Ksh {CartTotals().total} upon delivery. Enter your phone number to make the payment.</p>
                </div>

                <button className="btn btn-full mg-v-50">Make Payment</button>

              </form>
            </div>
          </>
        )
      }
    </>
  )
}

export default Payment