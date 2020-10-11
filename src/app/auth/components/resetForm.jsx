import React, {useState} from 'react'
import Sidebar from './leftsidebar';
import Input1 from '../../common/inputs'
import Api from '../../config/api'

const index = (props) => {

  const [form, setForm] = useState({})

  const handlePassword = (e) => {
    var frm = {...form}
    frm[e.target.id] = e.target.value
    setForm(frm)
    console.log(form)
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

  const errorMsg = (msg) => {
    var errDiv = document.getElementById("errorDiv")
    errDiv.style.visibility = 'visible';
    errDiv.innerHTML = `<p>${msg}</p>`;
    setTimeout(() => {
      errDiv.innerHTML = '&nbsp;';
      errDiv.style.visibility = 'hidden';
    }, 5300)
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    disableBtn('Sending...')

    var tk = props.location.pathname.split('/')[2]

    if(!form.authPass & !form.authPass2){
      errorMsg('Fill the passwords!')
      enableBtn('Send')
    } else if(form.authPass !== form.authPass2) {
      errorMsg('Passwords do not match!')
      enableBtn('Send')
    } else if(form.authPass2.split('').length < 6){
      errorMsg('Password is too short!')
      enableBtn('Send')
    } else {
      
      Api.confirmreset.post({password: form.authPass2, token: tk})
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
  }

  return (
    <div id="auth-wrapper">
      <Sidebar />
      <div id="loginFormDiv">
        <form id="loginForm" onSubmit={handleSubmit}>
            <h1 className="playfair-xlg mg-v-50">Reset Password</h1>
            {
                form.isSent ? (
                    <p className="lato-m align-center">Password Reset! <a href="/login">Login Here.</a></p>
                ) : (
                    <>
                        <Input1 label="Password" type="password" ph="Your password" id="authPass" value={form.password} onChange={handlePassword} required="required" />
                        <Input1 label="Confirm Password" type="password" ph="Confirm your password" id="authPass2" value={form.password2} onChange={handlePassword} required="required" />
                        <div id="errorDiv" className="lato-sm mg-v-20">&nbsp;</div>
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
