import React, { useState, useEffect } from 'react'
import { getTotals } from '../cart'
import URLS from '../../config/settings'
import ApiGet, { ApiPost } from '../../config/axios'
import {Select} from '../../common/inputs'
import format from '../../common/functions/formatter'

const getAmount = () => {
  const context = JSON.parse(localStorage.getItem("Cart"))
  var cart = [...context]
  var totals = {
    subtotal: 0,
    delivery: 0
  }
  if (cart.length > 0) {
    context.forEach(item => {
      totals.subtotal += item.price * item.quantity
      totals.delivery += item.weight < 5 ? (item.quantity*280) : ((((item.weight - 5) * 30)*item.quantity) + (item.quantity*280) )
    })
  }
  return Math.round(totals.subtotal + (.16 * totals.subtotal) + totals.delivery)
}

const makePayload = (payNumber, payMethod, posta) => {

  var payload = {
    phone_number: payNumber,
    amount: getAmount(),
    payment_mode: payMethod,
    currency_code: 'KES'
  }
  return payload
}

const Payment = () => {
  var code = "+254"

  const [payMethod, setPayMethod] = useState(0)
  const [payNumber, setPayNumber] = useState(code)
  const [postas, setPostas] = useState([])
  const [posta, setPosta] = useState(0)

  const getPostas = () => {
    ApiGet(`${URLS().POSTAS}`)
    .then(res => {
      setPostas(res.data)
    })
  }

  useEffect(() => {
    getPostas()
  },[])

  const getStatus = (kyc) => {
    ApiGet(`${URLS().PAYMENTS}?kyc=${kyc}`)
      .then(res => {
        var payStatus = {
          "status": res.data[0].status,
          "kyc": kyc
        }
        sessionStorage.setItem("payStatus", JSON.stringify(payStatus))
        console.log(payStatus)
      })
  }

  const handlePayMethod = method => {
    if (method === 'MPESA') {
      setPayMethod(1)
      const div = document.getElementById('mpesaDiv')
      div.classList.remove("radio-unchecked-div")
      div.classList.add("radio-checked-div")
      const div_ = document.getElementById('podDiv')
      div_.classList.remove("radio-checked-div")
      div_.classList.add("radio-unchecked-div")
    } else {
      setPayMethod(2)
      const div_ = document.getElementById('podDiv')
      div_.classList.remove("radio-unchecked-div")
      div_.classList.add("radio-checked-div")
      // const div = document.getElementById('mpesaDiv')
      // div.classList.remove("radio-checked-div")
      // div.classList.add("radio-unchecked-div")
    }
    document.getElementById('payBtn').disabled = ''
    // setPayMethod(method)
  }

  const handlePayNumber = (e) => setPayNumber(e.target.value)

  const handlePostas = (e) => setPosta(e.target.value)
  


  const handlePayOrder = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    // document.getElementById('mpesaDiv').style.pointerEvents = 'none'
    document.getElementById('podDiv').style.pointerEvents = 'none'
    document.getElementById('payBtn').disabled = 'disabled'
    // document.getElementById('payNumberInput').disabled = 'disabled'
    document.getElementById('payBtn').innerText = 'Confirming Order...'

    var payload = makePayload(payNumber, payMethod)

    ApiPost(`${URLS().PAYMENTS}`, payload)
      .then(res => {
        var data = res.data

        var payStatus = {
          "status": data.status,
          "kyc": data.kyc
        }
        
        if (data.payment_mode == 1){

          sessionStorage.setItem("payStatus", JSON.stringify(payStatus))
          document.getElementById('payBtn').innerText = 'Confirming Payment...'

          var checkPayStatus = setInterval(() => {
            payStatus = JSON.parse(sessionStorage.getItem("payStatus"))
            if (payStatus.status === "Success") {
              clearInterval(checkPayStatus)
              document.getElementById('payBtn').innerText = 'Payment Confirmed!'
              const user = JSON.parse(localStorage.getItem("user"))
              
              var order = {
                user: user.id,
                payment: data.id,
                total: 1,
                delivery: parseInt(posta),
                payment_mode: payMethod,
              }

              ApiPost(`${URLS().ORDERS}`,order)
                .then(res=>{
                  var data = res.data
                  const context = JSON.parse(localStorage.getItem("Cart"))
                  var cart = [...context];

                  for(var i=0; i<cart.length; i++){

                    var item = {
                      quantity: cart[i].quantity,
                      order: data.id,
                      product: cart[i].id
                    }

                    ApiPost(`${URLS().ORDERITEMS}`, item)
                    .then(res => {
                      console.log(res.data)
                    })
                  }
                })
              
                document.getElementById('payBtn').innerText = 'Order Succesful!'
                localStorage.removeItem('Cart')
                setTimeout(() => {
                  window.location.href = "/order-successful/"
                }, 3000)


            } else if (payStatus.status === "PendingConfirmation") {
              getStatus(data.kyc)
              setTimeout(() => {
                clearInterval(checkPayStatus)
                document.getElementById('payBtn').innerText = 'Payment Failed!'
              }, 60000)
            } else {
              clearInterval(checkPayStatus)
              document.getElementById('payBtn').innerText = 'Payment Failed!'
              setTimeout(() => {
                document.getElementById('payBtn').innerText = 'Make Payment'
                document.getElementById('payBtn').disabled = ''
                document.getElementById('payNumberInput').disabled = ''
                document.getElementById('mpesaDiv').style.pointerEvents = ''
                document.getElementById('podDiv').style.pointerEvents = ''
              }, 3000)
              console.log(payload)
            }
          }, 5000)

        } else {
          const user = JSON.parse(localStorage.getItem("user"))
          
          var order = {
            user: user.id,
            payment: data.id,
            total: 1,
            delivery: parseInt(posta),
            payment_mode: payMethod,
          }

          ApiPost(`${URLS().ORDERS}`,order)
            .then(res=>{
              var data = res.data
              const context = JSON.parse(localStorage.getItem("Cart"))
              var cart = [...context];

              for(var i=0; i<cart.length; i++){

                var item = {
                  quantity: cart[i].quantity,
                  order: data.id,
                  product: cart[i].id
                }

                ApiPost(`${URLS().ORDERITEMS}`, item)
                .then(res => {
                  console.log(res.data)
                })
              }

              document.getElementById('payBtn').innerText = 'Order Succesful!'
              localStorage.removeItem('Cart')
              setTimeout(() => {
                window.location.href = "/order-successful/"
              }, 3000)

            })
        }

      })
      .catch(error => {
        document.getElementById('payBtn').innerText = 'Failed, Try again.'
        setTimeout(() => {
          document.getElementById('payBtn').innerText = 'Complete Order'
          document.getElementById('payBtn').disabled = ''
          document.getElementById('payNumberInput').disabled = ''
          document.getElementById('mpesaDiv').style.pointerEvents = ''
          document.getElementById('podDiv').style.pointerEvents = ''
        }, 3000)
        console.log(error, payload)
      })
  }

  return (
    <div className="checkout-form">

    <form className="form" onSubmit={handlePayOrder}>
      
        {/* <div className="mg-v-50">
          <h1 className="playfair-m align-center">Account Details</h1>
          <p className="lato-m i align-center mg-v-10">Confirm Your Details</p>
        </div> */}

        <div className="mg-v-50">
          <h1 className="playfair-lg align-center">Shipping & Delivery</h1>
          <p className="lato-m i align-center mg-v-10">Delivery will be done through the postal service, Posta. Pick the point closest to you.</p>
          <Select label="Pick-up Station" options={postas} onChange={handlePostas}/>
        </div>

        <h1 className="playfair-lg align-center">Payment</h1>
        <p className="lato-m i align-center mg-v-10">Pick your preffered method of payment</p>

        {/* <div className="mg-v-50" onClick={() => handlePayMethod('MPESA')} id="mpesaDiv">
          <h2 className="lato-m b radio radio-unchecked mg-v-10">Mpesa Paybill</h2>
          <p className="lato-m">Pay Ksh {format(getTotals().total)} via Mpesa paybill. Enter the phone number to make the payment.</p>
  
          <div className="input1">
            <label>Phone Number (Use this number to make payment):</label>
            <input type="hidden" value={getTotals().total} id="cartTotal" />
            <input type="text" placeholder="Enter the phone number you'll use to pay" id="payNumberInput" value={payNumber} onChange={handlePayNumber} />
          </div>
        
        </div> */}

        <div className="mg-v-20" onClick={() => handlePayMethod('PAY_ON_DELIVERY')} id="podDiv">
          <h2 className="lato-m b radio radio-unchecked mg-v-10">Pay on Delivery</h2>
          <p className="lato-m">Pay Ksh {format(getTotals().total)} upon delivery.</p>
        </div>

        <button className="btn btn-full mg-v-50" disabled="disabled" id="payBtn">Complete Order</button>

      </form>
    </div>
  )
}

export default Payment