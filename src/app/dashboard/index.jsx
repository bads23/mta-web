import React, { Component } from 'react'
import './sass/main.scss'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Sidebar from './components/sidebar'

import Stats from './components/stats'
import Products from './components/products'
import Orders from './components/orders'
import Users from './components/users'

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