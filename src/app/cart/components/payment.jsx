import React, { useState } from 'react'
import { CartTotals } from '../context'
import URLS from '../../config/settings'
import ApiGet, { ApiPost } from '../../config/axios'


const makePayload = (payNumber, payMethod, total) => {
  var payload = {
    phone_number: '+254728753983',
    amount: 25000,
    payment_mode: 1,
    currency_code: 'KES'
  }
  return payload
}

// const Getter = (url) => {
//   ApiGet(url)
//     .then(res = {})
// }


const Payment = () => {

  var code = "+254"

  const [payMethod, setPayMethod] = useState()
  const [payNumber, setPayNumber] = useState(code)
  const [payStatus, setPayStatus] = useState({})

  const getStatus = (kyc) => {
    ApiGet(`${URLS().PAYMENTS}?kyc=${kyc}`)
      .then(res => {
        var data = {
          status: res.data[0].status
        }
        setPayStatus({ data })
        console.log(payStatus)
      })
  }

  const handlePayMethod = method => {
    if (method === 'MPESA') {
      const div = document.getElementById('mpesaDiv')
      div.classList.remove("radio-unchecked-div")
      div.classList.add("radio-checked-div")
      const div_ = document.getElementById('podDiv')
      div_.classList.remove("radio-checked-div")
      div_.classList.add("radio-unchecked-div")
    } else {
      const div_ = document.getElementById('podDiv')
      div_.classList.remove("radio-unchecked-div")
      div_.classList.add("radio-checked-div")
      const div = document.getElementById('mpesaDiv')
      div.classList.remove("radio-checked-div")
      div.classList.add("radio-unchecked-div")
    }
    document.getElementById('payBtn').disabled = ''
    setPayMethod(method)
  }

  const handlePayNumber = (e) => setPayNumber(e.target.value)


  const handlePayOrder = (e) => {
    e.preventDefault()
    document.getElementById('payBtn').disabled = 'disabled'
    document.getElementById('payBtn').innerText = 'Sending Payment Request'

    var payload = makePayload(payNumber, payMethod, CartTotals.total)

    ApiPost(`${URLS().PAYMENTS}`, payload)
      .then(res => {
        var data = res.data
        setPayStatus(data.status)
        document.getElementById('payBtn').innerText = 'Confirming Payment...'

        var checkPayStatus = setInterval(() => {
          if (payStatus === "success") {
            clearInterval(checkPayStatus)
            console.log('cleared!')
          } else {
            getStatus(data.kyc)
            console.log(payStatus)
          }
        }, 5000)

      })
      .catch(error => {
        document.getElementById('payBtn').innerText = 'Payment Failed, Try again.'
        setTimeout(() => {
          document.getElementById('payBtn').innerText = 'Make Payment'
          document.getElementById('payBtn').disabled = ''
        }, 3000)
        console.log(error)
      })
  }

  return (
    <div className="checkout-form">
      <h1 className="playfair-lg align-center">Confirm Payment</h1>
      <p className="lato-m i align-center mg-v-20">Pick your preffered method of payment</p>

      <form className="form" onSubmit={handlePayOrder}>

        <div className="mg-v-20" onClick={() => handlePayMethod('MPESA')} id="mpesaDiv">
          <h2 className="lato-m b radio radio-unchecked mg-v-10">Mpesa</h2>
          <p className="lato-m">Pay Ksh {CartTotals().total} via Mpesa paybill. Enter the phone number to make the payment.</p>

          <div className="input1">
            <label>Phone Number:</label>
            <input type="text" placeholder="Enter the phone number you'll use to pay" name="" value={payNumber} onChange={handlePayNumber} />
          </div>
        </div>

        <div className="" onClick={() => handlePayMethod('PAY_ON_DELIVERY')} id="podDiv">
          <h2 className="lato-m b radio radio-unchecked mg-v-10">Pay on Delivery</h2>
          <p className="lato-m">Pay Ksh {CartTotals().total} upon delivery.</p>
        </div>

        <button className="btn btn-full mg-v-50" disabled="disabled" id="payBtn">Make Payment</button>

      </form>
    </div>
  )
}

export default Payment