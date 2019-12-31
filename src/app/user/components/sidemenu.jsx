import React from 'react'
import {Link} from 'react-router-dom'

const Sidemenu = () =>{

   
    
    return(
        <>
            <div id="sidemenu">
                <h1 className="playfair-lg mg-v-50">My Account</h1>
                <div id="menu-div">
                    <div className="menu-item active">
                        <Link to="/my-account/info">
                            <span className="lato" id="info-menu">Personal Info</span>
                        </Link>
                    </div>

                    <div className="menu-item" >
                        <Link to="/my-account/orders">
                            <span className="lato" id="info-orders">Orders</span>
                        </Link>
                    </div>

                    <div className="menu-item">
                        <Link to="/my-account/change-password">
                            <span className="lato" id="info-pass">Change Password</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidemenu