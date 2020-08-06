import React, {useState, useEffect} from 'react'
import ApiGet from '../../config/axios'
import URLS from '../../config/settings'
import Product from './productComponent'
import {shuffle} from '../../common/functions/helpers'


const Related = ({id, category}) => {

    const [catalog, setCatalog] = useState([])


    const getCatalog = (id, category) => {
        ApiGet(`${URLS().CATALOG}`)
        .then(res => {
            var items = [...res.data]
            var np = []

            for(var i=0; items.length > i; i++){
                if (items[i].id !== id && items[i].category === category){
                    np.push(items[i])
                }
            }
            setCatalog(shuffle(np))
        })
    }

    useEffect(() => {
        getCatalog(id,category)
    },[])



    return (
        <>
            {
            catalog.length > 0 ? (
                <div className="mg-v-50" id="relatedDiv">
                    <h2 className="section-header">Related Items</h2>
                    <div className="fl-even fl-wrap">
                        {
                            catalog.slice(0,5).map(item => (
                                <Product item={item} key={item.id}  />
                            ))
                        }

                    </div>
                </div>
            ) : (
                <>
                </>
            )
            }
        </>
    )
}

export default Related