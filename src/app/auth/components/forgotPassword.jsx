import React, {useState} from 'react'
import Sidebar from './leftsidebar';
import Input1 from '../../common/inputs'
import {ApiPost} from '../../config/axios_legacy'
import URLS from '../../config/api'

const index = () => {

  const [form, setForm] = useState({})

  const handleEmail = (e) => {
    form.email = e.target.value
    setForm(form)
  }

  const disableBtn = (msg) => {
    var btn = document.getElementById('subBtn')
    btn.disabled = 'disabled'
    btn.innerText = `${msg}`
  }

  const enableBtn = (msg) => {
    var btn = document.getElementById('subBtn')
    btn.disabled = ''
    btn.innerText = `${msg}`
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    disableBtn('Sending...')

    ApiPost(`${URLS().RESETPASS}`, {email: form.email})
    .then(res => {
      if(res.data.status === "OK"){
        var frm = {...form}
        frm.isSent = true
        setForm(frm)
      } else {
        enableBtn('Unable to send. Try again later...')
      }
    })
    .catch(e =>{
      enableBtn('Unable to send. Try again later...')
    })
  }

  return (
    <div id="auth-wrapper">
      <Sidebar />
      <div id="loginFormDiv">
        <form id="loginForm" onSubmit={handleSubmit}>
            <h1 className="playfair-xlg mg-v-50">Reset Password</h1>
            {
                form.isSent ? (
                    <p className="lato-m align-center">Email Sent! Check your inbox.</p>
                ) : (
                    <>
                        <Input1 label="Email Address" type="email" ph="Enter your email address to recieve a link to reset your password." id="authEmail" value={form.email} onChange={handleEmail} required="required" />
                        <button className="btn btn-full mg-v-50" id="subBtn">Send</button>
                    </>
                )
            }
            
        </form>
      </div>
    </div>
  )
}

export default index
