import React, {useEffect, useState} from 'react'
import {Select} from '../../common/inputs'
import Api from '../../config/api'

const Shipping = ({posta, setPosta}) => {
    
    const [postas, setPostas] = useState([])
    
    const handlePostas = (e) => {
        setPosta(e.target.value)
    }
    const editPostas = (data) => {
        var new_postas = []
        for(var i=0; i<data.length; i++){
          data[i].name = data[i].name+' - '+data[i].code
          new_postas.push(data[i])
        }
        setPostas(new_postas)
    }

    const getPostas = () => {
        Api.postas.get()
        .then(res => {
            editPostas(res.data)
        })
    }

    useEffect(() =>{
        getPostas()
    },[])

    return(
        <div className="mg-v-50" id="shippingContainer">
            <h2 className="playfair-m">Shipping & Delivery</h2>
            <p className="lato-sm mg-v-10">Delivery will be done through the postal service, Posta. Pick the point closest to you.</p>
            <Select label="Pick-up Station" value={posta} options={postas} onChange={handlePostas}/>
        </div>
    )
}

export default Shipping