import React, {useState, useEffect} from 'react'

import URLS from '../../config/settings'
import ApiGet from '../../config/axios'

import {FormatDate} from '../../common/functions/formatter'


const OrderComponent = ({orders}) =>{
    
    

    const Total = (items) => {
        var subtotal = 0

        for(var i=0; i<items.length;i++){
            subtotal += (items[i].price * items[i].quantity)
        }

        return subtotal
    }
    

    return(
        orders.map(order => (
            <tr>
                <td>{order.name}</td>
                <td>
                    
                </td>
                <td>{FormatDate(order.date_added)}</td>
                <td>KES {Total(order.order_items)}</td>
                <td>{order.status}</td>
            </tr>
        ))
    )
}

const Orders = () =>{
    
    
    const [orders, setOrders] = useState([])
    
    const getOrders = () =>{

        ApiGet(`${URLS().ORDERS}`)
        .then(res => {
            setOrders(res.data)
        })
    }

    useEffect(() =>{
        getOrders()
    },[])
    
    return(
        <>
        {
            orders.length > 0 ? (
        
                <table>
                    <tbody>
                        <tr>
                            <th width="15%">Order No.</th>
                            <th width="35%">Items</th>
                            <th width="10%">Date</th>
                            <th width="20%" align="right">Total</th>
                            <th width="10%">Status</th>
                        </tr>
                        
                        <OrderComponent orders={orders} />
                        
                    </tbody>
                </table>
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