import React, {useState, useEffect} from 'react'

import URLS from '../../config/settings'
import ApiGet from '../../config/axios'

import formatNumber, {FormatDate} from '../../common/functions/formatter'



const OrderComponent = ({orders}) =>{

    const countDelivery = (items) =>{
        let delivery = 0
        for(var i=0; i<items.length; i++){
            var fee = items[i].delivery_fee * items[i].quantity
            delivery += fee
        }

        return delivery
    }

    return(
        orders.map(order => (
            <>
                <div className="order" key={order.name}>
                    <div className="ordertop fl-btw">
                        <p className="lato-m gold b">{order.name}</p>
                        <p className="lato-m grey">{FormatDate(order.date_added).date} | {order.status}</p>
                    </div>

                    <div className="ordermiddle">
                        {
                            order.order_items.map(item =>(
                                <div className="orderitem fl-btw" key={item.name}>
                                    <div className="itemimg">
                                        <img src="" alt=""/>
                                    </div>
                                    <p className="itemname playfair-lg">
                                        {item.name}
                                        <span className="lato-sm b i mg-v-20" style={{ display:'block' }}>Quantity: x{item.quantity}</span>
                                    </p>
                                    <p className="itemprice align-right playfair-lg gold">Kshs {formatNumber(item.buying_price * item.quantity)}</p>
                                </div>
                            ))
                        }
                        
                    </div>

                    <div className="orderbottom">
                        <p className="lato-m b mg-v-20">Delivery fee: <span className="gold playfair-lg">Kshs {countDelivery(order.order_items)}</span> </p>
                        <p className="lato-m b mg-v-20">Total: <span className="gold playfair-xlg">Kshs {formatNumber(order.amount)}</span> </p>
                    </div>
                </div>
            </>
        ))
    )
}

const Orders = () =>{
    const [orders, setOrders] = useState([])
    
    const getOrders = () =>{

        ApiGet(`${URLS().ORDERS}`)
        .then(res => {
            setOrders(res.data.reverse())
        })
    }

    useEffect(() =>{
        getOrders()
    },[])
    
    return(
        <>
        <h1 className="playfair">Orders</h1>
        {
            orders.length > 0 ? (
                <>
                    <OrderComponent orders={orders} />
                </>
                
            ) :

            (
                <>
                    <div className="mg-v-50 align-center">
                        <p className="lato-m">You haven't made any orders yet. Make one today!</p>
                    </div>
                </>
            )
        }
        
        </>
    )
}

export default Orders