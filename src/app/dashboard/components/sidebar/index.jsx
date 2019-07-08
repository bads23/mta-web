import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../../common/assets/svg/MTA.svg'

const index = ({ props }) => {

  // console.log(props.location.pathname)
  // var path = props.location.pathname
  // path = path.split("/");
  // console.log(path)


  // var dashlinks = document.getElementsByClassName("dashlinks");


  // if (path[2] === "") {
  //   dashlinks.classList.remove("active");
  //   document.getElementById("dashboard-link").classList.add("active")
  // } else if (path[2] === "products") {
  //   dashlinks.classList.remove("active");
  //   document.getElementById("products-link").classList.add("active")
  // } else if (path[2] === "orders") {
  //   dashlinks.classList.remove("active");
  //   document.getElementById("orders-link").classList.add("active")
  // } else if (path[2] === "users") {
  //   console.log(dashlinks)
  //   document.getElementById("users-link").classList.add("active")
  // }



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
            <li className="active dashlinks" id="dashboard-link">Dashboard</li>
          </Link>
          <Link to="/dashboard/products/">
            <li className="dashlinks" id="products-link">Products</li>
          </Link>
          <Link to="/dashboard/orders/">
            <li className="dashlinks" id="orders-link">Orders</li>
          </Link>
          <Link to="/dashboard/users/">
            <li className="dashlinks" id="users-link">Users</li>
          </Link>
          <Link to="/dashboard/clients/">
            <li className="dashlinks" id="users-link">Clients</li>
          </Link>
          <Link to="/dashboard/users/">
            <li className="dashlinks" id="users-link">Posts</li>
          </Link>
          <Link to="/dashboard/users/">
            <li className="dashlinks" id="users-link">Events</li>
          </Link>
        </ul>
      </nav>

    </div>
  )
}

export default index
