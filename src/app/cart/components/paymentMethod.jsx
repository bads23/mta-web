import React, { useContext } from 'react'
import Payment from './payment'
import LoginForm from '../../auth/login'
import { UserContext } from '../../auth/context'

const PaymentMethod = () => {
  const context = useContext(UserContext)
  return (
    <>
      {!context.user.email ? (
        <LoginForm />
      ) : (
          <Payment />
        )
      }
    </>
  )
}

export default PaymentMethod
