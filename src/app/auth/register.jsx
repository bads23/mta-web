import React from 'react'
import RegisterForm from './components/registerForm'
import Sidebar from './components/leftsidebar';


const index = () => {
  return (
    <div id="auth-wrapper">
      <Sidebar />
      <div id="loginFormDiv">
        <RegisterForm />
      </div>
    </div>
  )
}

export default index
