import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Right from './right/right'
import ApiGet from '../../../config/axios'
import URLS from '../../../config/settings'
import Formart from '../../../common/functions/formatter'

const Item = ({ props }) => {
  return (
    <a href={`/dashboard/products/edit/` + props.id}>
      <div className="item">
        <div className="pr-image"></div>
        <div className="pr-info">
          <p className="lato-m b">{props.name}</p>
          <p className="playfair-sm">Ksh {Formart(props.price)}</p>
        </div>
      </div>
    </a>
  )
}

const index = () => {
  const [products, setProducts] = useState([]);

  const getItems = () => {
    ApiGet(`${URLS().CATALOG}`)
      .then(res => {
        setProducts(res.data)
      })
  }

  useEffect(() => {
    getItems()
  }, [])

  console.log(products)

  return (
    <>
      <div className="midsection_sm">
        <div className="fl-btw">
          <h2 className="playfair-lg"> Products </h2>
          <div>
            <Link to="new">
              <span className="lato-m b"><i className="fas fa-plus "></i> New Product</span>
            </Link>
          </div>
        </div>
        <div className="fl-btw fl-wrap">
          {
            products ?
              (
                products.map(item => (
                  <Item props={item} key={item.id} />
                ))
              ) :
              (
                <></>
              )
          }
        </div>
      </div>
      <Right />
    </>
  )
}

export default index
