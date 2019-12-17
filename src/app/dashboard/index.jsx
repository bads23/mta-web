import React, { Component } from 'react'
import './sass/main.scss'
import { Route } from 'react-router-dom'
import Sidebar from './components/sidebar'

import Stats from './components/stats'
import Products from './components/products'
import Orders from './components/orders'
import Users from './components/users'
import Clients from './components/clients'
import Posts from './components/posts'

class Dashboard extends Component {
  render() {
    return (
      <>
        <Sidebar props={this.props} />

        <div className="middle">
          <Route exact path="/dashboard/" component={Stats} />
          <Route path="/dashboard/products/" component={Products} />
          <Route path="/dashboard/orders/" component={Orders} />
          <Route path="/dashboard/users/" component={Users} />
          <Route path="/dashboard/clients/" component={Clients} />
          <Route path="/dashboard/posts/" component={Posts} />
        </div>
      </>
    )
  }
}

export default Dashboard