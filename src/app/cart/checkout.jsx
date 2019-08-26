import React from 'react'
import Header from '../common/header/header'
import PaymentMethod from './components/paymentMethod'

const Checkout = () => {
    return (
        <>
            <Header/>
            <div id="top-bar"></div>

            <div className="cart-container middle-section">
                <h1 className="playfair-lg mg-v-20">Checkout</h1>

                <PaymentMethod/>
            </div>
        </>
    )
}

export default Checkout