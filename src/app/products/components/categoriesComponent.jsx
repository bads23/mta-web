import React from 'react'
import { Link } from 'react-router-dom'

import Product from './productComponent'

const Categories = ({ category }) => {
  return (

    <div className="mg-b-50" >
      <h2 className="section-header">{category.name}</h2>
      <div className="mg-b-10">
        <Link to={"categories/" + category.id}>
          <p className="lato-m align-center">
            View all &nbsp;
              <span>
              <i className="fas fa-angle-right"></i>
            </span>
          </p>
        </Link>
      </div>
      <div className="fl-even fl-wrap">
        {
          category.items.slice(0,5).map(item => (
            <Product item={item} key={item.id} />
          ))
        }

      </div>
    </div>
  )
}

export default Categories