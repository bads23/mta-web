import React, { Component } from 'react'
import Categories from './components/categoriesDetails'
import Loader from '../common/loader'
import Api from '../config/api'

import Header from '../common/header/header'

class Category extends Component {

  state = {}

  componentDidMount() {
    var id = this.props.match.params.id
    this.getItems(id)
    this.getImages()
  }

  getItems = async id => {
    Api.categories.get(id)
    .then(res => {
      this.setState({
        category: { ...res.data }
      })
    })
  }

  getImages = () => {
    Api.images.get('products')
    .then(res => {
      this.setState({
        images: [...res.data]
      })
    })
  }


  render() {
    return (
      <>
        <Header />
        <div id="top-bar"></div>
        
        <div className="middle-section">
        
          {
            this.state.category ? (
              <Categories category={this.state.category} key={this.state.category.id} images={this.state.images} />
            ) : (
              <Loader />
            )
          }

        </div>
      </>
    )
  }
}

export default Category
