import React from 'react'
import Right from './right/right'

const index = () => {
  return (
    <>
      <div className="midsection_sm">
        <h2 className="playfair-lg">Orders</h2>

        <table className="lato-sm-b">
          <tbody>
            <tr>
              <th>Date</th>
              <th>Order No</th>
              <th>Items</th>
              <th>Total</th>
            </tr>
            <tr>
              <td>3/10/2019</td>
              <td>#1206-0310</td>
              <td>Acoustic Guitar-Black</td>
              <td>Ksh 12544</td>
            </tr>

            <tr>
              <td>3/10/2019</td>
              <td>#1206-0310</td>
              <td>Acoustic Guitar-Black</td>
              <td>Ksh 12544</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Right />
    </>
  )
}

export default index
