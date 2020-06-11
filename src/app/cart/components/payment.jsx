import React, { useState } from 'react'
import { getTotals } from '../cart'
import URLS from '../../config/settings'
import ApiGet, { ApiPost } from '../../config/axios'
import format from '../../common/functions/formatter'

const Payment = () => {

  const sendEmail = (data) => {
    var payload = {
      order: data.id
    }
    
    ApiPost(`${URLS().SENDMAIL}`, payload)
    .then(res => {
      console.log(res)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handlePayOrder = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    document.getElementById('podDiv').style.pointerEvents = 'none'
    document.getElementById('payBtn').disabled = 'disabled'
    document.getElementById('payBtn').innerText = 'Confirming Order...'

    const user = JSON.parse(localStorage.getItem("user"))
    var order = {
      user: user.id,
    }

    ApiPost(`${URLS().ORDERS}`,order)
      .then(res=>{
        var data = res.data
        sendEmail(data)
        const context = JSON.parse(localStorage.getItem("Cart"))
        var cart = [...context];

        for(var i=0; i<cart.length; i++){

          var item = {
            quantity: cart[i].quantity,
            order: data.id,
            product: cart[i].id,
            delivery_fee: cart[i].weight < 5 ? (cart[i].quantity*280) : ((((cart[i].weight - 5) * 30)*cart[i].quantity) + (cart[i].quantity*280) ),
            buying_price: cart[i].price

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
  }

  return (
    <div className="checkout-form">

    <form className="form" onSubmit={handlePayOrder}>

        <h1 className="playfair-lg align-center">Payment</h1>
        <p className="lato-m i align-center mg-v-10">
          The amount is payable through M-PESA PAYBILL. <br/>
          <strong>Business No. - 400222 <br/> Acc. No. - 450673</strong>
          </p>

        <div className="mg-v-20" id="podDiv">
          <h2 className="lato-m b radio radio-unchecked mg-v-10">Pay on Delivery</h2>
          <p className="lato-m">Pay Ksh {format(getTotals().total)} upon delivery.</p>
        </div>

        <button className="btn btn-full mg-v-50" id="payBtn">Complete Order</button>

      </form>
    </div>
  )
}

export default Payment