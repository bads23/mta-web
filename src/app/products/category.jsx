import React, { Component } from 'react'
import Categories from './components/categoriesDetails'
import axios from 'axios'
import URLS from '../config/settings'
import ApiGet from '../config/axios'
// import Notify from '../common/popups'

import Header from '../common/header/header'

class Category extends Component {

  state = {}

  componentDidMount() {
    var id = this.props.match.params.id
    this.getItems(id)
    this.getImages()
  }

  getItems = async id => {
    await axios.get(`${URLS().CATEGORIES + id}/`)
      .then(res => {
        this.setState({
          category: { ...res.data }
        })
      })
  }

  getImages = () => {
    ApiGet(`${URLS().IMAGES}products/`)
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
                ''
              )
          }

        </div>
      </>
    )
  }
}

export default Category
