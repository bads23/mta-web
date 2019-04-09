import React from 'react'
import SignIn from './checkoutSignin'
import Payment from './payment'


const PaymentMethod = () => {
  const loggedIn = false
  return (
    <>
      {loggedIn ? (
        <SignIn />
      ) : (
          <Payment />
        )
      }
    </>
  )
}

export default PaymentMethod
