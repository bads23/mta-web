import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import ApiGet from '../../../../config/axios'
import URLS from '../../../../config/settings'
import Formart from '../../../../common/functions/formatter'

const Item = ({ props }) => {
  
  return (
    <a href={`/dashboard/products/edit/` + props.id}>
      <div className="item">
        <div className="pr-image">
          {
            props.images.length >= 1 ? (
              <img src={`http://media.motiontalentafrica.co.ke/${props.images[0].path}`} alt=""/>
            ) : (
              ''
            )
          }  
        </div>
        <div className="pr-info">
          <p className="lato-m b mg-0">{props.name}</p>
          <p className="playfair-sm mg-0">Ksh {Formart(props.price)}</p>
        </div>
      </div>
    </a>
  )
}

const index = () => {
  const [products, setProducts] = useState([]);
  // const [images, setImages] = useState([]);

  const getItems = () => {
    ApiGet(`${URLS().CATALOG}`)
      .then(res => {
        setProducts(res.data)
      })
  }

  // const getImages = (id) => {
  //   ApiGet(`${URLS().IMAGES}products/`)
  //   .then(res => {
  //     setImages(res.data)
  //   })
  // }

  useEffect(() => {
    getItems()
    // getImages()
  }, [])

  // console.log(products)

  return (
    <>
      <div className="midsection_full">
        <div className="fl-btw">
          <h2 className="playfair-lg"> Products </h2>
          <div>
            <Link to="/dashboard/products/new">
              <span className="lato-m b"><i className="fas fa-plus "></i> New Product</span>
            </Link>
          </div>
        </div>
        <div className="fl-btw fl-wrap">
          {
            products ?
              (
                products.map(item => (
                  <Item props={item} key={item.id}/>
                ))
              ) :
              (
                <></>
              )
          }
        </div>
      </div>

    </>
  )
}

export default index