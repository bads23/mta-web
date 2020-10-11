import React, { Component } from 'react'
import ProductDetails from './components/productDetails'
import Api from '../config/api'
import Header from '../common/header/header'
import Loader from '../common/loader'
import Related from './components/relatedComponent'

const ImageSlider = ({item}) => {
  return (
    <div className="image-container">
      {
        item.images.length >= 1 ? (
          <img src={`${process.env.REACT_APP_MEDIA_URL+item.images[0].path}`} alt="" />
        ): (
          <></>
        )
      }
    </div>
  )
}

class Product extends Component {

  state = {}

  componentDidMount() {
    var id = this.props.match.params.id
    this.getItem(id)
  }

  getItem = async id => {
    Api.catalog.get(`${id}`)
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
                  <ImageSlider item={this.state.item} />
                  <ProductDetails item={this.state.item} />
                  <Related id={this.props.match.params.id} category={this.state.item.category} />
                </>
              ) : (
                  <Loader/>
                )
            }
          </div>
        </div>
      </>
    )
  }
}

export default Product
