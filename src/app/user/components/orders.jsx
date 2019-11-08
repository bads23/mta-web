import React, {useState, useEffect} from 'react'

import URLS from '../../config/settings'
import ApiGet from '../../config/axios'

import formatNumber, {FormatDate} from '../../common/functions/formatter'


const OrderComponent = ({orders}) =>{
    return(
        orders.map(order => (
            <tr>
                <td>{order.name}</td>
                <td>
                    {
                       order.order_items.map(item =>(
                           <p>
                               {`${item.name}(${item.quantity})`} 
                           </p>
                       )) 
                    }
                </td>
                <td>{FormatDate(order.date_added).date}</td>
                <td>KES {formatNumber(order.amount)}</td>
                <td>{order.pay_status}</td>
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