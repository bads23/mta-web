import React, { Component } from 'react'

class Cart extends Component {
  render() {
    return (
      <>
        <div id="top-bar"></div>
        <div class="cart-container middle-section">
          <h1 class="playfair-lg mg-v-20">Shopping Cart</h1>

          <div class="item-container mg-v-20">
            <div class="item-desc flex">
              <div class="image-container img-wrap mg-h-10">
                <img src="./img/drum.png" />
              </div>
              <div class="details-container mg-h-20">
                <p class="lato-lg">5 Piece Drum Set</p>
                <p class="lato-sm mg-v-5 i">Quantity: 1</p>
              </div>
            </div>

            <div class="price-container">
              <p class="playfair-lg gold">Ksh 53,213</p>
            </div>

          </div>

          <div class="item-container mg-v-20">
            <div class="item-desc flex">
              <div class="image-container img-wrap mg-h-10">
                <img src="./img/drum.png" />
              </div>
              <div class="details-container mg-h-20">
                <p class="lato-lg">5 Piece Drum Set</p>
                <p class="lato-sm mg-v-5 i">Quantity: 1</p>
              </div>
            </div>

            <div class="price-container">
              <p class="playfair-lg gold">Ksh 53,213</p>
            </div>

          </div>

          <div class="total pd-20 align-right medium-text">
            <p> <span class="lato"> Subtotal:</span>&nbsp;&nbsp;<span class="playfair-lg b price-spans">Ksh 55,380</span></p>
            <p> <span class="lato">V.A.T:</span> <span class="playfair-lg b price-spans">Ksh 0</span></p>

            <p><span class="lato">Total:</span><span class="subtotal playfair-xlg mg-v-20 gold price-spans">Ksh 55,380</span></p>
            <a href="checkout.html" class="mg-v-20"><button class="btn btn-black">Check Out</button> </a>
          </div>

        </div>
      </>
    )
  }
}

export default Cart