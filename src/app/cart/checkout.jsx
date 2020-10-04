import React, {useContext} from 'react'
import { CartContext } from './context'
import format from '../common/functions/formatter'
import Header from '../common/header/header'
import Payment from './components/payment'
import Shipping from './components/shipping'

const Checkout = () => {

    const getTotals = () => {
        const context = useContext(CartContext)
        var cart = [...context.cart]
        var totals = {
          subtotal: 0,
          delivery: 0,
          total: 0
        }
      
        if (cart.length>0){
          context.cart.forEach(item => {
            totals.subtotal += item.price * item.quantity
            totals.delivery += item.weight < 5 ? (item.quantity*280) : ((((item.weight - 5) * 30)*item.quantity) + (item.quantity*280))
          })
          totals.total = totals.subtotal + totals.delivery
        }
        return totals
    }

    return (
        <>
            <Header/>
            <div id="top-bar"></div>
        
            <div className="cart-container middle-section">
                <h1 className="playfair-lg mg-v-20">Checkout</h1>
                <Shipping />

                <div className="CartTotals">
                    <p className="align-right">
                        <span className="lato-sm">SubTotal: </span>
                        <span className="subtotal playfair-m gold">
                            Ksh {format(Math.round(getTotals().subtotal))}
                        </span>
                    </p>

                    <p className="align-right">
                        <span className="lato-sm">Delivery: </span>
                        <span className="subtotal playfair-m gold">
                            Ksh {format(Math.round(getTotals().delivery))}
                        </span>
                    </p>
                    
                    <p className="align-right">
                        <span className="lato">Total: </span>
                        <span className="subtotal playfair-lg gold">
                            Ksh {format(Math.round(getTotals().total))}
                        </span>
                    </p>
                </div>

                <Payment/>
            </div>
        </>
    )
}

export default Checkout