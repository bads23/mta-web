import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Sidebar from '../sidebar'

import Stats from './stats'
import Products from './products'
import Orders from './orders'
import Users from './users'

const index = () => {
  return (
    <>
      <Sidebar />

      <div className="middle">
        <Router>
          <Switch>
            <Route exact path="/dashboard/" component={Stats} />
            <Route path="/dashboard/products/" component={Products} />
            <Route exact path="/dashboard/orders/" component={Orders} />
            <Route exact path="/dashboard/users/" component={Users} />
          </Switch>
        </Router>
      </div>
    </>
  )
}

export default index
