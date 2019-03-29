import React from 'react'
import { Link } from 'react-router-dom'
import formatter from '../../common/functions/formatter'

const Product = ({ item }) => {
  return (
    <Link to={`/product/`+item.id}>
      <div className="item">
        <div className="pr-image">
          <img src="img/ac.png" alt="guitar" />
        </div>
        <div className="pr-info">
          <p className="lato-m b">{item.name}</p>
          <p className="playfair-sm">Ksh {formatter(item.price)}</p>
        </div>
      </div>
    </Link>
  )
}

export default Product