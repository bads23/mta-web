import React from 'react'
import Right from './right/right'

const index = () => {
  return (
    <>
      <div className="midsection_sm">
        <h2 className="playfair-lg">Users</h2>

        <table className="lato-sm-b">
          <tbody>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Last Login</th>
              <th>Active</th>
            </tr>

            <tr>
              <td>2</td>
              <td>Stephen Karuma</td>
              <td>stevekaruma@gmail.com</td>
              <td>03/10/2019</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Stephen Karuma</td>
              <td>stevekaruma@gmail.com</td>
              <td>03/10/2019</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Stephen Karuma</td>
              <td>stevekaruma@gmail.com</td>
              <td>03/10/2019</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Stephen Karuma</td>
              <td>stevekaruma@gmail.com</td>
              <td>03/10/2019</td>
              <td>Active</td>
            </tr>

            <tr>
              <td>2</td>
              <td>Stephen Karuma</td>
              <td>stevekaruma@gmail.com</td>
              <td>03/10/2019</td>
              <td>Active</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Right />
    </>
  )
}

export default index
