import React from 'react'
import { Link } from 'react-router-dom'
import formatter from '../../common/functions/formatter'

const ImageComponent = ({src}) => {
  const isloaded = () =>{ 
    document.getElementById(`img-${src}`).style.display = 'none';
  }
  return(
    <div className="pr-image">
      <div className="loader" id={`img-`+src}>
        <i className="fas fa-spinner fa-spin"></i>
      </div>
      <img onLoad={isloaded} src={`${process.env.REACT_APP_MEDIA_URL+src}`} alt="" />
    </div>
  )
}

export const Product = ({ item }) => {
  return (
    <a href={`/product/`+item.id} className="mr-auto">
      <div className="item">
        <ImageComponent src={item.images[0].path} />
        <div className="pr-info">
          <p className="lato-m b mg-0">{item.name}</p>
          <p className="playfair-sm mg-0">Ksh {formatter(item.price)}</p>
        </div>
      </div>
    </a>
  )
}

const Categories = ({category}) => {
  return (
    <>
      {
        category.items.length > 0 ? (
          <div className="mg-b-50">
            <Link to={"categories/" + category.id} className="categorySection" >
              <h2 className="section-header gold">{category.name}</h2>
              <div className="mg-b-10 sectionLink">
                  <p className="lato-m">
                    View all &nbsp;
                      <span>
                      <i className="fas fa-angle-right"></i>
                    </span>
                  </p>
              </div>
            </Link>
            <div className="fl-wrap">
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