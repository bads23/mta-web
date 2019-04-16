import React from 'react'
import { Link } from 'react-router-dom'

const right = () => {
  return (
    <>
      <div class="sidebar-right-products">
        <div class="dash-prod-t">
          <Link to="/"><span class="playfair-lg">Activity</span></Link>
          &nbsp;
          <Link to="/"><span class="lato-lg">Edit Product</span></Link>
        </div>
        <div class="logs pd-20">
          <span class="lato-lg b">
            Acoustic guitar-Black
          </span>
        </div>
      </div>
    </>
  )
}

export default right
