import React, {useContext, useState} from 'react'
import {UserContext} from '../../auth/context'
import URLS from '../../config/api'
import {ApiPut} from '../../config/axios_legacy'
import Input1 from '../../common/inputs'


const Info = () =>{
    var context = useContext(UserContext);
    var userInfo = {...context.user}
    const [myInfo, setMyInfo] = useState(userInfo)
    
    const handleForm = (e) => {
        var frm = {...myInfo}
        frm[e.target.id] = e.target.value
        setMyInfo(frm)
        console.log(myInfo)
    }
    
    const handleSubmit = (e) =>{
        var userBtn = document.getElementById('userBtn')
        userBtn.disabled = 'disabled';
        userBtn.innerText = 'Saving...'

        e.preventDefault()
        e.stopPropagation()

        const data = {...myInfo}
        
        ApiPut(`${URLS().USERS}${data.id}/`, data)
        .then(res =>{
            context.setUser(res.data)
            localStorage.setItem("user", JSON.stringify(res.data))
            userBtn.innerText = 'Saved!';
            setTimeout(() => {
                userBtn.innerText = 'Save';
                userBtn.disabled = '';
            }, 3000)
        })
    }

    return(
        <>
            <h1 className="playfair align-center">Personal Information</h1>
            <form id="userInfoForm" onSubmit={handleSubmit}>
                <Input1 label="First Name" type="text" id="first_name" value={myInfo.first_name} onChange={handleForm} />
                <Input1 label="Last Name" type="text" id="last_name" value={myInfo.last_name} onChange={handleForm} />
                <Input1 label="Email" type="email" id="email" value={myInfo.email}  onChange={handleForm} />
                <button className="btn btn-black" id="userBtn">Save</button>
            </form>
        </>
    )
}

export default Info