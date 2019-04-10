import React, {useState, useEffect} from 'react'
import { CartTotals } from '../context'



const Payment = () => {

  const [payMethod, setPayMethod] = useState()
  const [payNumber, setPayNumber] = useState()
  
  const handlePayMethod = (method)=>setPayMethod(method)
  const handlePayNumber = (e)=> setPayNumber(e.target.value)

  return(
      <div className="checkout-form">
        <h1 className="playfair-lg align-center">Confirm Payment</h1>
        <p className="lato-m i align-center mg-v-20">Pick your preffered method of payment</p>

        <form className="form">

        <div className="mg-v-20" onClick={() => handlePayMethod('MPESA')}>
          <h2 className="lato-m b radio radio-checked mg-v-10">Mpesa</h2>
          <p className="lato-m">Pay Ksh {CartTotals().total} via Mpesa paybill. Enter your phone number to make the payment.</p>

          <div className="input1">
            <label>Phone Number:</label>
            <input type="text" placeholder="Enter the phone number you'll use to pay" name="" value={payNumber} onChange={handlePayNumber} />
          </div>
        </div>

        <div className="grey" onClick={() => handlePayMethod('PAY_ON_DELIVERY')}>
          <h2 className="lato-m b radio radio-unchecked mg-v-10">Pay on Delivery</h2>
          <p className="lato-m">Pay Ksh {CartTotals().total} upon delivery.</p>
        </div>

        <button className="btn btn-full mg-v-50">Make Payment</button>

        </form>
      </div>
  )
}

export default Payment