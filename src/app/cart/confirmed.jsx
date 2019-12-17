import React from 'react'
import Header from '../common/header/header'

const FinalStep = () => {
    return(
        <>  
            <Header/>
            <div id="top-bar"></div>

            <div className="middle-section cart-container">

                <h1 className="playfair-lg mg-v-20 xxlg-text">
                <i className="far fa-grin-beam xxlg-text gold align-center"></i>
                    <br/>
                    &nbsp;
                    Yay! Order Confirmed!
                </h1>

                <p className="lg-text align-center mg-v-50">
                    Click <a href="/my-account/orders" className="gold">HERE </a> to view your order. Thanks for shopping with us!
                </p>
            </div>

        </>
    )
}


export default FinalStep