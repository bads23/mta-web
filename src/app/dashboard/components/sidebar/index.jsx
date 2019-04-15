import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../common/assets/svg/MTA.svg'

const index = () => {
  return (
    <div className="sidebar">

      <div className="logo-wrapper align-center pd-v-20">
        <div className="logo-img">
          <img src={Logo} alt="mta-logo" />
        </div>
        <div className="logo-text letter-spacing-5">
          <span className="playfair-xxlg">MOTION</span>
          <span className="lato-sm">TALENT AFRICA</span>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <Link to="/dashboard/">
            <li className="active">Dashboard</li>
          </Link>
          <Link to="/dashboard/products/">
            <li>Products</li>
          </Link>
          <Link to="/dashboard/orders/">
            <li>Orders</li>
          </Link>
          <Link to="/dashboard/users/">
            <li>Users</li>
          </Link>
        </ul>
      </nav>

    </div>
  )
}

export default index
