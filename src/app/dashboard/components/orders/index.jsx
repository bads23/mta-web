import React, { useState, useEffect } from 'react'
import Right from './right/right'
import ApiGet from '../../../config/axios'
import URLS from '../../../config/settings'
import Formart, { FormatDate } from '../../../common/functions/formatter'

const index = () => {

  const [orders, setOrders] = useState([])

  const getOrders = () => {
    ApiGet(`${URLS().ORDERS}`)
      .then(res => {
        setOrders(res.data)
      })
  }

  useEffect(() => {
    getOrders()
  }, [])

  return (
    <>
      <div className="midsection_sm">
        {
          orders.length > 0 ?
            (
              <>

                <h2 className="playfair-lg">Orders</h2>

                <table className="lato-sm-b">
                  <tbody>
                    <tr>
                      <th>Date</th>
                      <th>Order No</th>
                      <th>Items</th>
                      <th className="totalsCol">Total</th>
                    </tr>

                    {orders.map(order => (
                      <>
                        <tr>
                          <th>{FormatDate(order.date_added)}</th>
                          <th>{order.name}</th>
                          <th>{order.order_items.map(item => (item.product + ','))}</th>
                          <th className="totalsCol"> Ksh {Formart(order.total)}</th>
                        </tr>
                      </>
                    ))}
                  </tbody>
                </table>
              </>
            ) :
            (
              <>
                <h2 className="playfair-lg">No Orders available!</h2>
              </>
            )
        }
      </div>
    </>
  )
}

export default index
