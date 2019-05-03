import React, { createContext, useState, useEffect } from 'react'

export const UserContext = createContext()

const UserProvider = (props) => {
  var UserExists = localStorage.getItem("user")

  if (UserExists) {
    var userInfo = JSON.parse(UserExists)
  } else {
    userInfo = {}
  }

  const [user, setUser] = useState(userInfo)

  useEffect(() => {
    setUser(userInfo)
  }, { userInfo })

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {props.children}
    </UserContext.Provider>
  )
}

export default UserProvider