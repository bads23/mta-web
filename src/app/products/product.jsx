import React, { Component } from 'react'
import ImageSlider from './components/imageslider'
import ProductDetails from './components/productDetails'
import axios from 'axios'


class Product extends Component {

  state = {}

  componentDidMount() {
    var id = this.props.match.params.id
    this.getItem(id)
  }

  getItem = async id => {
    await axios.get(`http://localhost:8000/catalog/${id}/`)
      .then(res => {
        this.setState({
          item: { ...res.data }
        })
      })
  }

  render() {
    return (
      <>
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