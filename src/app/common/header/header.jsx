import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/svg/MTA.svg'

import DateProvider, { DateContext } from './context'
import { CartContext } from '../../cart/context'
import { UserContext } from '../../auth/context'

import Notify from '../popups'

const LeftHeader = () => {
  const context = useContext(DateContext)

  return (
    <div id="left-header" className="header-sides">
      <div className="top">{context.day}</div>
      <hr />
      <div className="bottom">{context.month + ' ' + context.date + ", " + context.year}</div>
    </div>
  )
}

const User = () => {
  const context = useContext(UserContext)

  const Logout = () => {
    localStorage.removeItem("user")
    localStorage.removeItem("tokens")
    context.setUser({})
    window.href.location = '/'
  }


  return (
    context.user.email ? (
      <div className="top">
        <span className="playfair-links">
          <Link to="/my-account/info">
          {/* <Link to="/myaccount">Hi {context.user.first_name} </Link> */}
          Hi {context.user.first_name}
          </Link>
        </span> |
        {!context.user.is_staff ? (
          <>
            <span className="playfair-links">
              <a href="/dashboard">Dashboard</a>
            </span>
            |
          </>
        ) : ('')
        }
        <span className="playfair-links" onClick={() => Logout()}>
          <a href="/">Logout</a>
        </span>
      </div>
    ) : (
        <div className="top">
          <span className="playfair-links">
            <Link to="/login">Sign in</Link>  </span>
          | <span className="playfair-links">
            <Link to="/register">Register</Link>
          </span>
        </div>
      )
  )
  
}

const Cart = () => {
  const context = useContext(CartContext)
  var cart = [...context.cart]
  var totals = {
    allitems: 0
  }
  if (cart.length > 0) {
    context.cart.forEach(item => {
      totals.allitems += 1 * item.quantity
    })
  }

  return (
    <>
      {
        context.cart.length === 0 ? (
          <div className="bottom"><Link to="/cart/">Your Cart is empty.</Link></div>
        ) : (
            <div className="bottom"><Link to="/cart/">{totals.allitems} item{totals.allitems > 1 ? "s" : ""} in cart</Link></div>
          )
      }
    </>
  )
}

const Header = () => {
  return (
    <>
      <div id="header">
        <DateProvider>
          <LeftHeader />
        </DateProvider>
        <div className="logo-box">
          <Link to="/">
            <img src={Logo} alt="Logo" className="logo" />
          </Link>
        </div>
        <div id="right-header" className="header-sides">
          <User />
          <hr />
          <Cart />
        </div>
      </div>
      <Notify />
    </>
    
  )
}

export default Header