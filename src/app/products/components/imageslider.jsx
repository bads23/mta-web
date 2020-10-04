import React from 'react'
import Api from '../../config/api'

const ImageSlider = ({item}) => {
  return (
    <div className="image-container">
      {
        item.images.length >= 1 ? (
          <img src={`${Api.images.get(item.images[0].path)}`} alt="" />
        ): (
          <></>
        )
      }
    </div>
  )
}

export default ImageSlider