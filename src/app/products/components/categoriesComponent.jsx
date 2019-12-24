import React from 'react'
import { Link } from 'react-router-dom'

import Product from './productComponent'

const Categories = ({ category}) => {
  return (
    <>
      {
        category.items.length > 0 ? (
          <div className="mg-b-50" >
              <Link to={"categories/" + category.id}>
            <h2 className="section-header">{category.name}</h2>
            <div className="mg-b-10">
                <p className="lato-m align-center">
                  View all &nbsp;
                    <span>
                    <i className="fas fa-angle-right"></i>
                  </span>
                </p>
            </div>
              </Link>
            <div className="fl-even fl-wrap">
              {
                category.items.slice(0,5).map(item => (
                  <Product item={item} key={item.id}  />
                ))
              }

            </div>
          </div>
        ) : (
          <>
          </>
        )
      }
    </>
  )
}

export default Categories