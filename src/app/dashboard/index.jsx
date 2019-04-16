import React, { Component } from 'react'
import './sass/main.scss'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Sidebar from './components/sidebar'

import Stats from './components/middle/stats'
import Products from './components/middle/products'
import Orders from './components/middle/orders'
import Users from './components/middle/users'

class Dashboard extends Component {
  render() {
    return (
      <>
        <Sidebar />

        <div className="middle">
          <Route exact path="/dashboard/" component={Stats} />
          <Route path="/dashboard/products/" component={Products} />
          <Route path="/dashboard/orders/" component={Orders} />
          <Route path="/dashboard/users/" component={Users} />
        </div>
      </>
    )
  }
}

export default Dashboard