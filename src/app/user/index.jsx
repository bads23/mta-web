import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'

import Header from '../common/header/header'
import MyInfo from './components/info'
import MyOrders from './components/orders'
import ChangePass from './components/change-pass'
 

class User extends Component{
 
    render() {
        return(
            <>
                <Header/>
                <div id="top-bar"></div>

                <div className="cart-container middle-section">
                    <h1 className="playfair-lg mg-v-20">My Account</h1>
                    <div className="mg-b-10">
                        <p className="lato-m align-center">
                            <a href='/my-account/info'>My Info</a>
                            &nbsp;|&nbsp;
                            <a href='/my-account/orders'>My Orders</a>
                            &nbsp;|&nbsp;
                            <a href='/my-account/change-password'>Change Password</a>               
                        </p>
                    </div>

                    <Router>
                        <Route exact path='/my-account/info' component={MyInfo} />
                        <Route exact path='/my-account/orders' component={MyOrders} />
                        <Route exact path='/my-account/change-password' component={ChangePass} />
                    </Router>

                </div>

                
            </>
        )
    }
}


export default User