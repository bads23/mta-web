import React, { useState } from 'react'
import Input1 from '../../common/inputs'
import URLS from '../../config/settings'
import ApiGet, { ApiPost } from '../../config/axios'

const LoginForm = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()

  const handleEmail = (e) => {
    setEmail(e.target.value)
  }

  const handlePassword = (e) => {
    setPassword(e.target.value)
  }

  const makePayload = () => {

  }

  const handleSubmit = (e) => {
    e.preventDefault()

    var payload = {
      "email": email,
      "password": password
    }

    ApiPost(`${URLS().AUTH}`, payload)
      .then(res => {
        console.log(res.data)
      })
      .catch(error => {
        console.log(error)
      })
  }

  return (
    <form action="" id="loginForm" onSubmit={handleSubmit}>
      <h1 className="playfair-xlg mg-v-50">Login</h1>
      <Input1 label="Email Address" type="email" ph="Your email here" id="authEmail" value={email} onChange={handleEmail} />
      <Input1 label="Password" type="password" ph="Your password" id="authPass" value={password} onChange={handlePassword} />
      <button className="btn btn-full mg-v-50">Login</button>
    </form>
  )
}

export default LoginForm
