import React, { useContext } from 'react'
import formatNumber from '../../common/functions/formatter'
import { CartContext } from '../../cart/context'
import { ShowNotify } from '../../common/popups'

const UpdateCart = ({ item }) => {
  const context = useContext(CartContext)
  const newCart = () => {
    var items = [...context.cart]

    if (items.length === 0) {
      item.quantity = 1
      items.push(item)
    } else {
      var ids = []
      items.forEach(cartitem => {
        ids.push(cartitem.id)
      })
      if (ids.includes(item.id)) {
        var id = ids.indexOf(item.id)
        items[id].quantity += 1
      } else {
        item.quantity = 1
        items.push(item)
      }
    }
    context.setCart(items)
    localStorage.setItem("Cart", JSON.stringify(items))
    ShowNotify()
  }
  return (
    <button className="btn-black mg-v-20" onClick={() => newCart()}>
      Add to Cart
    </button>
  )
}


const ProductDetails = ({ item }) => {
  return (
    <div className="text-container">
      <h1 className="playfair-xlg mg-v-20">{item.name}</h1>
      <p className="lato-m">{item.description}</p>
      <h1 className="playfair-lg mg-v-10">Features</h1>

      <ul className="lato-m">
        <li>Feature 1</li>
        <li>Feature 2</li>
        <li>Feature 3</li>
        <li>Feature 4</li>
      </ul>

      <p className="playfair-xlg mg-v-50 gold">
        <span>Ksh </span>
        {item ? formatNumber(item.price) : 'no'}
      </p>
      <UpdateCart item={item} />
    </div>
  )
}

export default ProductDetails