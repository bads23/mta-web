import React, { Component, createContext } from 'react'
import ApiGet from '../../config/axios'

export const ProductsContext = createContext({})


class ProductProvider extends Component {

  state = {
    test: true
  }

  componentDidMount() {
    const categories = ApiGet('categories/')

    this.setState({
      categories: categories
    })
  }


  render() {
    return (
      <ProductsContext.Provider value={this.state}>
        {this.props.children}
      </ProductsContext.Provider>
    )
  }

}

export default ProductProvider