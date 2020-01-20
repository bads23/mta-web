import React, {useState} from 'react'

// import URLS from '../../config/settings'
// import {ApiPost, ApiPut} from '../../config/axios'
import Input1 from '../../common/inputs'


// import { UserContext } from '../../auth/context'


const errorMsg = (msg) => {
    var errDiv = document.getElementById("errorDiv")

    errDiv.innerHTML = `<p>${msg}</p>`;
    setTimeout(() => {
      errDiv.innerHTML = '&nbsp;';
    }, 5000)
  }


const ChangePass = () =>{

    var obj = {
        oldPass : '',
        newPass: '',
        newPass2: ''
    }

    const [pass, setPass] = useState(obj)
    // const context = useContext(UserContext)

    const handleOldPass = (e) =>{
        const npass = {...pass}
        npass.oldPass = e.target.value
        setPass(npass)
    }

    const handleNewPass = (e) => {
        const npass = {...pass}
        npass.newPass = e.target.value
        setPass(npass)
    }

    const handleNewPass2 = (e) => {

        const npass = {...pass}
        npass.newPass2 = e.target.value
        setPass(npass)
    }

    const checkPassMatch = () =>{
        if(pass.newPass2 !== pass.newPass){
            errorMsg('Passwords do not match!')
        } else {
            errorMsg('&nbsp;')
        }

        console.log(pass)
    }

    const handleChangePass = (e) => {
        e.preventDefault()
        e.stopPropagation()

        if(pass.oldPass === '' | pass.newPass === '' | pass.newPass2 === ''){
            errorMsg('Please fill all fields!')
        } else if(pass.newPass !== pass.newPass2){
            errorMsg('Passwords do not match');
        } else {
            
            // const payload = {
            //     email: context.user.email,
            //     password: pass.oldPass
            // }
            
            // const newPass = {
            //     email: context.user.email,
            //     password: pass.newPass
            // }
            
            // ApiPost(`${URLS().AUTH}`, payload)
            // .then(res =>{
                    
            //     ApiPut(`${URLS().USERS}${context.user.id}/`, newPass)
            //     .then(res =>{
            //         console.log(res.data)
            //     })
            // })
        }
    }


    return(
        <>  
            <h1 className="playfair">Change Password</h1>
            <form onSubmit={handleChangePass}>
                <Input1 type="password" label="Old Password" value={pass.oldPass} onChange={handleOldPass} required/>
                <Input1 type="password" label="New Password" value={pass.newPass} onChange={handleNewPass}  />
                <Input1 type="password" label="Confirm new Password" value={pass.newPass2} onChange={handleNewPass2} onKeyUp={checkPassMatch} />
                <div id="errorDiv" className="lato-sm mg-v-20">&nbsp;</div>
                <button className="btn btn-black">Change Password</button>
            </form>
        </>
    )
}

export default ChangePass