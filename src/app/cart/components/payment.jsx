import React from 'react'
import Api from '../../config/api'

const Payment = () => {
  const handlePayOrder = (e) => {
    e.preventDefault()
    e.stopPropagation()
    
    // document.getElementById('podDiv').style.pointerEvents = 'none'
    document.getElementById('payBtn').disabled = 'disabled'
    document.getElementById('payBtn').innerText = 'Confirming Order...'

    const user = JSON.parse(localStorage.getItem("user"))
    const context = JSON.parse(localStorage.getItem("Cart"))
    var cart = [...context];

    var order = {
      user: user.id,
    }

    Api.orders.post(order)
    .then(res=>{
      var data = res.data
      for(var i=0; i<cart.length; i++){
        var item = {
          quantity: cart[i].quantity,
          order: data.id,
          product: cart[i].id,
          delivery_fee: cart[i].weight < 5 ? (cart[i].quantity*280) : ((((cart[i].weight - 5) * 30)*cart[i].quantity) + (cart[i].quantity*280)),
          buying_price: cart[i].price
        }
        Api.orderitems.post(item)
        .then(res => {
          console.log(res.data)
        })
      }
    })
    
    document.getElementById('payBtn').innerText = 'Order Succesful!'

    setTimeout(() => {
      localStorage.removeItem('Cart')
      window.location.href = "/order-successful/"
    }, 3000)
  }

  return (
    <div className="checkout-form">

    <form className="form" onSubmit={handlePayOrder}>
        <h2 className="playfair-m align-center">Payment</h2>
        <p className="lato-sm align-center mg-v-10">
          The amount is payable through M-PESA PAYBILL. <br/>
          <strong>Business No. - 400222 <br/> Acc. No. - 450673</strong>
          </p>
        <button className="btn btn-full mg-v-50" id="payBtn">Complete Order</button>
      </form>
    </div>
  )
}

export default Payment