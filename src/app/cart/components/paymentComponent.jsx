import React from 'react'

const Payment = () => {
  return (
    <>
      <div class="checkout-form">
        <h1 class="playfair-lg align-center">Confirm Payment</h1>
        <p class="lato-m i align-center mg-v-20">Pick your preffered method of payment</p>

        <form class="form">
          <div className="mg-v-20">
            <h2 class="lato-m b radio radio-checked mg-v-10">Mpesa</h2>
            <p class="lato-m">Pay Ksh 55,380 via Mpesa paybill. Enter your phone number to make the payment.</p>

            <div class="input1">
              <label>Phone Number:</label>
              <input type="email" placeholder="Enter the phone number you'll use to pay" name="" value="" />
            </div>
          </div>


          <div className="grey">
            <h2 class="lato-m b radio radio-unchecked mg-v-10">Pay on Delivery</h2>
            <p class="lato-m">Pay Ksh 55,380 upon delivery. Enter your phone number to make the payment.</p>
          </div>

          <button class="btn btn-full mg-v-50">Make Payment</button>

        </form>
      </div>
    </>
  )
}

export default Payment