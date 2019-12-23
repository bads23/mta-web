import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'


import ApiGet from '../../../config/axios'
import URLS from '../../../config/settings'


import Edit from './right/editClient'
import New from './right/newClient'


const Item = ({ props }) => {
  return (
    <a href={`/dashboard/clients/edit/${props.id}`}>
      <div className="item">
        <div className="pr-image"></div>
        <div className="pr-info">
          <p className="lato-m b">{props.name}</p>
        </div>
      </div>
    </a>
  )
}

const index = () => {
  const [clients, setClients] = useState([])

  const getClients = () => {
    ApiGet(`${URLS().CLIENTS}`)
      .then(res => {
        setClients(res.data)
      })
  }

  useEffect(() =>{
    getClients()
  }, [])

  return (
    <>
      <Router>
        <Route exact path="/dashboard/clients/" render={() => (
          <>
            <div className="midsection_full">
              <div className="fl-btw">
                <h2 className="playfair-lg">Clientele</h2>
                <div>
                  <Link to="/dashboard/clients/new">
                    <span className="lato-m b"><i className="fas fa-plus "></i> New Client</span>
                  </Link>
                </div>
              </div>
              
              <div className="fl-btw fl-wrap">
                {
                  clients.length > 0 ? (
                    clients.map(client => (
                      <Item props={client} key={client.id} />
                      ))
                      ) : (
                        <></>
                        )
                      }
              </div>
            </div>
          </>
        )} />

        <Route exact path='/dashboard/clients/edit/:id' render={(props) => (
          <Edit props={props} />
        )} />

        <Route exact path='/dashboard/clients/new' component={New} />
      </Router>
      {/* <Right /> */}
    </>
  )
}

export default index
