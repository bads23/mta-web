import React from 'react'
import URLS from '../../config/settings'

const ImageSlider = ({item}) => {

  return (
    <div className="image-container">
      {
        item.images.length >= 1 ? (
          <img src={`${URLS().IMAGES}`+item.images[0].path} alt="" />
        ): (
          <></>
        )
      }
     
    </div>
  )
}

export default ImageSlider