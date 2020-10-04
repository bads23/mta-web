import React from 'react'
import { Link } from 'react-router-dom'
import Api from '../../config/api'
import formatter from '../../common/functions/formatter'

export const Product = ({ item }) => {
  return (
    <a href={`/product/`+item.id}>
      <div className="item">
        <div className="pr-image">
        {
        item.images.length >= 1 ? (
          <img src={`${Api.images.get(item.images[0].path)}`} alt="" />
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
    </a>
  )
}

const Categories = ({ category}) => {
  return (
    <>
      {
        category.items.length > 0 ? (
          <div className="mg-b-50" >
            <Link to={"categories/" + category.id} className="categorySection" >
              <h2 className="section-header">{category.name}</h2>
              <div className="mg-b-10" className="sectionLink">
                  <p className="lato-m">
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