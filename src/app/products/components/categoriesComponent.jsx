import React from 'react'
import { Link } from 'react-router-dom'

import Product from './productComponent'

const Categories = () => {
  return (
    <div className="mg-b-50" >
      <h2 className="section-header">Music Instruments</h2>
      <div className="mg-b-10">
        <Link to="categories/2">
          <p className="lato-m align-center">
            View all &nbsp;
            <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </p>
        </Link>
      </div>
      <div className="fl-even fl-wrap">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  )
}

export default Categories