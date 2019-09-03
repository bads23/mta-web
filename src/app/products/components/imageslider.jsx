import React from 'react'

const ImageSlider = ({item}) => {
  return (
    <div className="image-container">
      {
            item.images.length >= 1 ? (
              <img src={item.images[0].path} alt="guitar" />
            ) : (
              <></>
            )
          }
    </div>
  )
}

export default ImageSlider