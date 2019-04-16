import React from 'react'
import { Link } from 'react-router-dom'

const right = () => {
  return (
    <>
      <div class="sidebar-right-products">
      <div class="dash-prod-t">
        <Link to="/"><span class="lato-lg">User Profile</span></Link>
        &nbsp;
        <Link to="/"><span class="lato-lg">Edit User</span></Link>
      </div>
    </div>
    </>
  )
}

export default right
