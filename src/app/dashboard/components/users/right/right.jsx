import React from 'react'
import { Link } from 'react-router-dom'

const right = () => {
  return (
    <>
      <div className="sidebar-right-products">
        <div className="dash-prod-t">
          <Link to="/"><span className="lato-lg">User Profile</span></Link>
          &nbsp;
        <Link to="/"><span className="lato-lg">Edit User</span></Link>
        </div>
      </div>
    </>
  )
}

export default right
