import React from 'react'
import { Link } from 'react-router-dom'
import formatter from '../../common/functions/formatter'
import URLS from '../../config/settings'

const Product = ({ item }) => {
  
  return (
    <Link to={`/product/`+item.id}>
      <div className="item">
        <div className="pr-image">
        {
        item.images.length >= 1 ? (
          <img src={`${URLS().IMAGES}${item.images[0].path}`} alt="" />
        ): (
          <></>
        )
      }
        </div>
        <div className="pr-info">
          <p className="lato-m b mg-0">{item.name}</p>
          <p className="playfair-sm mg-0">Ksh {formatter(item.price)}</p>
        </div>
      </div>
    </Link>
  )
}

export default Product