import React from 'react'
import {Link } from 'react-router-dom'

const EmptyCart = () => {
    return(
        <>
            <div className="cart-container middle-section align-center">
                <h1 className="playfair-lg mg-v-20">Your Shopping Cart is empty!</h1>
                <Link to='/'>
                    <button className="btn-black align-center mg-v-20">Start Shopping</button>
                </Link>
            </div>
        </>
    )
}

export default EmptyCart