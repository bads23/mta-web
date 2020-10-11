import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import axios from 'axios'
import UAParser from 'ua-parser-js'
import Login from './app/auth/login'
import Home from './app/home/index'
import Product from './app/products/product'
import Category from './app/products/category'
import Cart from './app/cart/cart'
import CartProvider from './app/cart/context'
import UserProvider from './app/auth/context'
import Register from './app/auth/register'
import Checkout from './app/cart/checkout'
import User from './app/user'
import FinalStep from './app/cart/confirmed'
import ResetPassword from './app/auth/components/resetForm'
import ForgotPassword from './app/auth/components/forgotPassword'

import Api from './app/config/api'

import Loading from './app/common/functions/loaders'


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
    .catch(err => {
      // console.log(err.message)
    })
  }

  getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.showPosition);
    } else {
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
      Api.visitors.post(payload)
      .then(res => {
        localStorage.setItem("mta_visitor", JSON.stringify(res.data))
      })
      .catch(err => {
      })
    }
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
                <Route path="/order-successful/" component={FinalStep} />
                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />
                <Route path="/forgotpassword" component={ForgotPassword} />
                <Route path="/resetpassword" component={ResetPassword} />
                <Route path="/categories/:id" component={Category} />
                <Route path="/my-account" component={User} />
              </Router >
            </CartProvider>
          </UserProvider>
        </div >
      )
      }
      </>
    );
  }
}

export default App;