import React, {useState, useEffect, useContext} from 'react'
import Api from '../../config/api'
import formatNumber, {FormatDate} from '../../common/functions/formatter'
import { UserContext } from '../../auth/context'

const OrderComponent = ({orders}) =>{

    const countTotals = (items) =>{
        let delivery = 0
        let total = 0

        for(var i=0; i<items.length; i++){
            var fee = items[i].delivery_fee * items[i].quantity
            var price = items[i].price * items[i].quantity
            delivery += fee
            total += price
        }

        return {
            delivery: delivery,
            total: total+delivery
        }
    }

    return(
        orders.map(order => (
            <>
                <div className="order" key={order.name}>    
                    <div className="ordertop">
                        <p className="lato-m">Order No: <span className="gold b">{order.name}</span></p>
                        <p className="lato-m grey">{FormatDate(order.date_added).date} | {order.status_name}</p>
                    </div>

                    <div className="ordermiddle">
                        {
                            order.order_items.map(item =>(
                                <div className="orderitem fl-btw" key={item.name}>
                                    <div className="itemimg">
                                        <img src="" alt=""/>
                                    </div>
                                    <p className="itemname lato-m">
                                        {item.name} ({item.quantity})
                                        <br/>
                                        Kshs {formatNumber(item.buying_price * item.quantity)}
                                    </p>
                                    <p className="itemprice playfair-lg gold"></p>
                                </div>
                            ))
                        }
                        
                    </div>

                    <div className="orderbottom align-right">
                        <p className="lato-m b mg-v-10">Delivery fee: <span className="gold playfair-lg">Kshs {formatNumber(countTotals(order.order_items).delivery)}</span> </p>
                        <p className="lato-m b mg-v-20">Total: <span className="gold playfair-lg">Kshs {formatNumber(countTotals(order.order_items).total)}</span> </p>
                    </div>
                </div>
            </>
        ))
    )
}

const Orders = () =>{
    const [orders, setOrders] = useState([])
    var context = useContext(UserContext)
    const getOrders = () =>{
        Api.orders.get(`?user=${context.user.id}`)
        .then(res => {
            setOrders(res.data.reverse())
        })
    }

    useEffect(() =>{
        getOrders()
    },[])
    
    return(
        <>
        <h1 className="playfair align-center">Orders</h1>
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