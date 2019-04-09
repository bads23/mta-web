import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'
import SETTINGS from '../../config/settings'

export const ProductContext = createContext()
const fetcher = ({ resource }) => {

  const [product, setProduct] = useState({})

  const fetchProduct = async () => {
    const response = await axios.get(
      `${SETTINGS.SERVER_URL}/${resource}/`
    )
    setProduct(response.data)
  }

  useEffect(() => {
    fetchProduct()
  }, { resource })

  return product
}


const ProductProvider = (props) => {

  return (
    <ProductContext.Provider value={fetcher({ resource: 1 })}>
      {props.children}
    </ProductContext.Provider >
  )

}

export default ProductProvider