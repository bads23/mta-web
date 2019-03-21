import React from 'react'
import { MyConsumer } from '../../../context'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <MyConsumer>
      {(context) => (
        <div id="header">
          <div id="left-header" className="header-sides">
            <div className="top">{context.day}</div>
            <hr />
            <div className="bottom">{context.month + ' ' + context.date + ", " + context.year}</div>
          </div>
          <div className="logo-box">
            <img src="MTA.png" alt="Logo" className="logo" />
          </div>
          <div id="right-header" className="header-sides">
            <div className="top"><span className="playfair-links">
              <Link to="login">Sign in </Link>  </span> | <span className="playfair-links"><Link to="register/">Register </Link></span>
            </div>
            <hr />
            <div className="bottom">Your Cart is empty</div>
          </div>
        </div>
      )}
    </MyConsumer>
  )
}

export default Header