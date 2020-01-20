import React, {Component} from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Header from '../common/header/header'
import MyInfo from './components/info'
import MyOrders from './components/orders'
import ChangePass from './components/change-pass'

import Sidemenu from './components/sidemenu'

class User extends Component{
 
    render() {
        return(
            <>
                <Header/>
                <div id="top-bar"></div>

                

                <div id="user-container">
                
                <Router>
                    <Sidemenu props={this.props}/>

                    <div id="user-options">

                        
                            <Route exact path='/my-account/info' component={MyInfo} />
                            <Route exact path='/my-account/orders' component={MyOrders} />
                            <Route exact path='/my-account/change-password' component={ChangePass} />
                        
                    </div>
                </Router>
                </div>

                
            </>
        )
    }
}


export default User