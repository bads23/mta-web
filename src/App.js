import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './app/auth/login'
// import Header from './app/common/header/header'
// import Footer from './app/common/header/footer'
import Home from './app/common/index'
import Product from './app/products/product'
import Category from './app/products/category'
import Cart from './app/cart/cart'
import Logo from './app/common/assets/svg/MTA-SPIN.svg'
import CartProvider from './app/cart/context'
import UserProvider from './app/auth/context'
import Dashboard from './app/dashboard/index'
import Register from './app/auth/register'
import Checkout from './app/cart/checkout'
import User from './app/user'

const Loading = () => {
  return (
    <>
      <div id="loadingScreen">
        <div id="loadingWrap">
          <div id='loaderImgDiv'>
            <img src={Logo} alt="Logo" className="logo" id="loaderImg" />
          </div>
          <div id="fakeLogo">
            <div className="sq-wraps">
              <div className="sq" id="sq1"></div>
            </div>
            <div className="sq-wraps">
              <div className="sq" id="sq2"></div>
            </div>
            <div className="sq-wraps">
              <h1>M</h1>
            </div>
          </div>
          <div id="loaderText">
            <span id="main">MOTION</span>
            <span id="other">TALENT AFRICA</span>
          </div>
        </div>
      </div>
    </>
  )
}

class App extends Component {

  state = {
    api: false
  }

  render() {
    return (
      <>{this.state.api ? (<Loading />) : (

        <div id="wrapper">
          <UserProvider>
            <CartProvider>
              <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/product/:id" component={Product} />
                <Route path="/cart/" component={Cart} />
                <Route path="/checkout/" component={Checkout} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/categories/:id" component={Category} />
                <Route path="/my-account" component={User} />
                {/* <div id="push"></div> */}
              </Router >
            </CartProvider>

            <Router>
              <Route path="/dashboard/" component={Dashboard} />
            </Router>
          </UserProvider>
        </div >
      )
      }
      </>
    );
  }
}

export default App;