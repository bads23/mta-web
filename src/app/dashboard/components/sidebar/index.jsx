import React, {useState, useEffect} from 'react'
import Logo from '../../../common/assets/svg/MTA.svg'
import Notify from '../../../common/popups'

const index = ({ props }) => {

  const [menu, setMenu] = useState('')

  const activeMenu = () => {
    var path = props.location.pathname
    path = path.split("/");
    console.log(path[2])
    setMenu({menu: path[2]})
  }

  useEffect(() =>{
    activeMenu()
  },[])

  return (
    <div className="sidebar">

      <div className="logo-wrapper align-center pd-v-20">
        <div className="logo-img">
          <a href="/">
            <img src={Logo} alt="mta-logo" />
          </a>
          
        </div>
        <div className="logo-text letter-spacing-5">
          <span className="playfair-xxlg">MOTION</span>
          <span className="lato-sm">TALENT AFRICA</span>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <a href="/dashboard/">
            <li className={menu.menu === '' ? `active`: ``} id="dashboard-link" onClick={activeMenu}>Dashboard</li>
          </a>
          <a href="/dashboard/products/">
            <li className={menu.menu === 'products' ? `active`: ``} id="products-link" onClick={activeMenu}>Products</li>
          </a>
          <a href="/dashboard/orders/">
            <li className={menu.menu === 'orders' ? `active`: ``} id="orders-link" onClick={activeMenu}>Orders</li>
          </a>
          <a href="/dashboard/users/">
            <li className={menu.menu === 'users' ? `active`: ``} id="users-link" onClick={activeMenu}>Users</li>
          </a>
          <a href="/dashboard/clients/">
            <li className={menu.menu === 'clients' ? `active`: ``} id="users-link" onClick={activeMenu}>Clients</li>
          </a>
          <a href="/dashboard/posts/">
            <li className={menu.menu === 'posts' ? `active`: ``} id="users-link" onClick={activeMenu}>Posts</li>
          </a>
          <a href="/dashboard/events/">
            <li className={menu.menu === 'events' ? `active`: ``} id="users-link" onClick={activeMenu}>Events</li>
          </a>
        </ul>
      </nav>
      <Notify />
    </div>
  )
}

export default index
