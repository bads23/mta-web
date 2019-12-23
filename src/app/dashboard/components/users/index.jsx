import React, { useState, useEffect } from 'react'
import Right from './right/right'
import ApiGet from '../../../config/axios'
import URLS from '../../../config/settings'
import { FormatDate } from '../../../common/functions/formatter';

const index = () => {

  const [users, setUsers] = useState([])

  const getUsers = () => {
    ApiGet(`${URLS().USERS}`)
      .then(res => {
        setUsers(res.data)
      })
  }

  useEffect(() => {
    getUsers()
  }, [])

  return (
    <>
      <div className="midsection_full">
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
            {
              users.map(user => (
                <>
                  <tr>
                    <td>{user.id}</td>
                    <td>{user.last_name}, {user.first_name}</td>
                    <td>{user.email}</td>
                    <td>{user.last_login ? (FormatDate(user.last_login)) : ('Not Logged in yet')}</td>
                    <td>{user.is_active ? 'Active' : 'Inactive'}</td>
                  </tr>
                </>
              ))
            }

          </tbody>
        </table>
      </div>
    </>
  )
}

export default index
