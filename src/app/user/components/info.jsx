import React, {useContext, useState} from 'react'

import {UserContext} from '../../auth/context'
import URLS from '../../config/settings'
import {ApiPut} from '../../config/axios'

import Input1, {Select} from '../../common/inputs'

const genderOptions = [
    {
        id: 1,
        name: "Male"
    },
    {
        id: 2,
        name: "Female"
    },
    {
        id: 3,
        name: "Other"
    }
]




const Info = () =>{
    var context = useContext(UserContext);
    var userInfo = {...context.user}
    const [myInfo, setMyInfo] = useState(userInfo)
    
    const handleFname = (e) =>{
        var np = {...myInfo}
        np.first_name = e.target.value
        setMyInfo(np)
    }

    const handleLname = (e) =>{
        var np = {...myInfo}
        np.last_name = e.target.value
        setMyInfo(np)
    }

    const handleEmail = (e) =>{
        var np = {...myInfo}
        np.email = e.target.value
        setMyInfo(np)
    }

    const handleNumber = (e) =>{
        var np = {...myInfo}
        np.first_name = e.target.value
        setMyInfo(np)
    }
    

    const handleForm = (e) =>{

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
            <form id="userInfoForm" onSubmit={handleForm}>
                <Input1 label="First Name" type="text" value={myInfo.first_name} onChange={handleFname} />
                <Input1 label="Last Name" type="text" value={myInfo.last_name} onChange={handleLname} />
                <Input1 label="Email" type="email" value={myInfo.email}  onChange={handleEmail} />
                {/* <Input1 label="Phone Number" type="number" value={myInfo.number} onChange={handleNumber} />
                <Select label="Gender" options={genderOptions} />
                <Input1 type="text" label="City" />
                <Input1 type="text" label="Town" /> */}

                <button className="btn btn-black" id="userBtn">Save</button>
            </form>
        </>
    )
}

export default Info