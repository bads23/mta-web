import React, {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'

const Sidemenu = ({props}) =>{
    const [is_active, setActive] = useState('')

    const updateSideBar = (v) =>{
        console.log(v)
    }

    useEffect(() => {
        setActive(props.location.pathname.split("/")[2])
    },[])

    return(
        <>
            <div id="sidemenu">
                <div id="menu-div">
                    <div className={`menu-item ${is_active === 'info' ? 'activeMenu' : '' }`}>
                        <a href="/my-account/info">
                            <span className="lato" id="info-menu">Personal Info</span>
                        </a>
                    </div>

                    <div className={`menu-item ${is_active === 'orders' ? 'activeMenu' : '' }`}>
                        <a href="/my-account/orders">
                            <span className="lato" id="info-orders">Orders</span>
                        </a>
                    </div>

                    <div className={`menu-item ${is_active === 'change-password' ? 'activeMenu' : '' }`}>
                        <a href="/my-account/change-password">
                            <span className="lato" id="info-pass">Change Password</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidemenu