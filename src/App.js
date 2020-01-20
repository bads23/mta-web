import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'
import UAParser from 'ua-parser-js'



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
import FinalStep from './app/cart/confirmed';
import CountDown from './app/common/header/countdown'

import URLS from './app/config/settings'
import { ApiPost } from './app/config/axios'

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
    api: false,
    userIp: '',
    location: '',
    browser: '',
    os: ''
  }

  getIp = () => {
    axios.get('https://jsonip.com')
    .then(res =>{
      this.setState({ ip: res.data.ip})
      this.updateVisitors(this.state)
    })
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else { 
      //  console.log("Geolocation is not supported by this browser.");
       this.showPosition(false)
    }
  }

  showPosition = (pos) => {
    if(pos !== false){
      this.setState({location: `${pos.coords.latitude}, ${pos.coords.longitude}`})
    } else{
      this.setState({location: 'n/a'})
    }
  }

  getBrowser = () =>{
    var parser = new UAParser();
    var r = parser.getResult(); 
    // console.log(parser.getResult());
    this.setState({
      browser: `${r.browser.name}, ${r.browser.version}`,
      os: `${r.os.name}, ${r.os.version}`
    })
  }

  componentWillMount(){
    this.getLocation()
    this.getBrowser()
    this.getIp()
  }



  updateVisitors = (payload) =>{
    var obj = localStorage.getItem('mta_visitor')
    if(obj === null){
      ApiPost(`${URLS().VISITORS}`, payload)
        .then(res => {
          localStorage.setItem("mta_visitor", JSON.stringify(res.data))
        })
    }
  }

  render() {
    return (
      <>{this.state.api ? (<Loading />) : (

        <div id="wrapper">
          <CountDown />
          <UserProvider>
            <CartProvider>
              <Router>
                <Route exact path="/" component={Home} />
                <Route exact path="/product/:id" component={Product} />
                <Route path="/cart/" component={Cart} />
                <Route path="/checkout/" component={Checkout} />
                <Route path="/order-successful/" component={FinalStep} />
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