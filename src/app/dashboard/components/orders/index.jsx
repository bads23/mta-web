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
      <div className="midsection_full">
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
                          <td>{FormatDate(order.date_added).date}</td>
                          <td>{order.name}</td>
                          <td>{order.order_items.map(item => (item.product + ','))}</td>
                          <td className="totalsCol"> Ksh {Formart(order.total)}</td>
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
