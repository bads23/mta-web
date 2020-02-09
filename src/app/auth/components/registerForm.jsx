import React, { useState, useContext } from 'react'
import Input1 from '../../common/inputs'
import URLS from '../../config/settings'
import { ApiPost } from '../../config/axios'
import { UserContext } from '../context';
// import { hostname } from 'os';




const RegisterForm = () => {
  const context = useContext(UserContext)
  const [userInfo, setUserInfo] = useState({})

  const errorMsg = (msg) => {
    var errDiv = document.getElementById("errorDiv")
    errDiv.style.visibility = 'visible';
    errDiv.innerHTML = `<p>${msg}</p>`;
    setTimeout(() => {
      errDiv.innerHTML = '&nbsp;';
      errDiv.style.visibility = 'hidden';
    }, 5000)
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

  const updateContext = (user) => {
    context.setUser(user)
    localStorage.setItem("user", JSON.stringify(user))
  }

  const handleInput = (e) => {
    var id = e.target.id
    var value = e.target.value

    var user = userInfo
    user[id] = value
    console.log(user)
    setUserInfo(user)
  }

  const sendEmail = () => {

    var payload = {
      email: "NEW USER",
      data: {
        first_name: userInfo.fname,
        last_name: userInfo.lname,
        email: userInfo.email
      }
    }
    
    ApiPost(`${URLS().IMAGES}`, payload)
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    if (!userInfo.fname || !userInfo.email || !userInfo.pass2) {
      errorMsg("Please fill in the missing fields!")
      console.log("try again")
    } else if (userInfo.pass1 !== userInfo.pass2) {
      errorMsg("Passwords do not match!")
    } else {
      disableBtn("Registering ...")

      var payload = userInfo
      payload['password'] = userInfo.pass2
      payload['first_name'] = userInfo.fname
      payload['last_name'] = userInfo.lname

      ApiPost(`${URLS().USERS}`, payload)
        .then(res => {
          errorMsg("Registration Successful!")
          
          updateContext(res.data)
          // console.log(res.data.access)
          // get user credentials
          ApiPost(`${URLS().AUTH}`, {
            "email": userInfo.email,
            'password': userInfo.password
          })
            .then(res => {
              sendEmail()
              window.history.back()
              localStorage.setItem("tokens", JSON.stringify(res.data))
            })
            .catch(error => {
            })

        })
        .catch(error => {
          if (!error.response) {
            errorMsg("Network Error! Try again Later.")
          } else {
            errorMsg(JSON.stringify(error.response.data))
          }
          enableBtn("Register")
          console.log(JSON.stringify(error))
        })
    }
  }

  return (
    <form id="loginForm" onSubmit={handleSubmit}>
      <h1 className="playfair-xlg mg-v-50">Register</h1>

      <Input1 label="First Name" type="text" ph="First name" id="fname" value={userInfo.fname} onChange={handleInput} required="required" />
      <Input1 label="Last Name" type="text" ph="Last name" id="lname" value={userInfo.lname} onChange={handleInput} required="required" />
      <Input1 label="Email" type="email" ph="Your email address" id="email" value={userInfo.email} onChange={handleInput} required="required" />
      <Input1 label="Password" type="password" ph="Your password" id="pass1" value={userInfo.pass1} onChange={handleInput} required="required" />
      <Input1 label="Confirm Password" type="password" ph="Your password" id="pass2" value={userInfo.pass2} onChange={handleInput} required="required" />

      <div id="errorDiv" className="lato-sm mg-v-20">&nbsp;</div>
      <button className="btn btn-full mg-v-50" id="subBtn">Register</button>
    </form>
  )
}

export default RegisterForm
