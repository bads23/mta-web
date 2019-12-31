import React from 'react'
import Loginform from './components/loginForm'
import Sidebar from './components/leftsidebar';

const index = () => {
  return (
    <div id="auth-wrapper">
      <Sidebar />
      <div id="loginFormDiv">
        <Loginform />
      </div>
    </div>
  )
}

export default index
