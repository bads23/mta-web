import React, { Component } from 'react'
import ImageSlider from './components/imageslider'
import ProductDetails from './components/productDetails'
import axios from 'axios'
import URLS from '../config/settings'

import Header from '../common/header/header'

class Product extends Component {

  state = {}

  componentDidMount() {
    var id = this.props.match.params.id
    this.getItem(id)
  }

  getItem = async id => {
    await axios.get(`${URLS().CATALOG + id}/`)
      .then(res => {
        this.setState({
          item: { ...res.data }
        })
      })
  }

  render() {
    return (
      <>
        <Header />
        <div id="top-bar"></div>
        <div className="middle-section">
          <div className="product-container">
            {
              this.state.item ? (
                <>
                  <ImageSlider images={this.state.item.images} />
                  <ProductDetails item={this.state.item} />
                </>
              ) : (
                  <p>Loading</p>
                )
            }

          </div>
        </div>
      </>
    )
  }
}

export default Product
