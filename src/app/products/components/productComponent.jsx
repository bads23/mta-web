import React from 'react'
import { Link } from 'react-router-dom'

const Product = (props) => {
  return (
    <Link to="/product/id">
      <div class="item">
        <div class="pr-image">
          <img src="img/ac.png" alt="Image" />
        </div>
        <div class="pr-info">
          <p class="lato-m b">Music Instrument</p>
          <p class="playfair-sm">Ksh 4,989</p>
        </div>
      </div>
    </Link>
  )
}

export default Product