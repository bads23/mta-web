import React from 'react'

const CartItem = () => {
  return (
    <>
      <div className="item-container mg-v-20">
        <div className="item-desc flex">
          <div className="image-container img-wrap mg-h-10">
            <img src="./img/drum.png" alt="img" />
          </div>
          <div className="details-container mg-h-20">
            <p className="lato-lg">5 Piece Drum Set</p>
            <p className="lato-sm mg-v-5 i">Quantity: 1</p>
          </div>
        </div>

        <div className="price-container">
          <p className="playfair-lg gold">Ksh 53,213</p>
        </div>

      </div>
    </>
  )
}

export default CartItem