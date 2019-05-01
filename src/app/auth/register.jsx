import React from 'react'
import RegisterForm from './components/registerForm'
// import Logo from '../common/assets/svg/MTA.svg'

const index = () => {
  return (
    <div id="auth-wrapper">
      {/* <div id="logo">
        <img src={Logo} alt="" />
      </div> */}
      <RegisterForm />
    </div>
  )
}

export default index
