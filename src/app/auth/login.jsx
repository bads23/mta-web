import React from 'react'
import Loginform from './components/loginForm'
import Logo from '../common/assets/svg/MTA.svg'

const index = () => {
  return (
    <div id="auth-wrapper">
      <div id="logo">
        <img src={Logo} alt="" />
      </div>
      <Loginform />
    </div>
  )
}

export default index
