import React, { Component } from 'react'
// import Product from '../products/components/productComponent'
import Slider from './slider/sliderComponent'
import Categories from '../products/components/categoriesComponent'

class Home extends Component {
  render() {
    return (
      <>
        <Slider />
        <div className="main-section">
          <Categories />
          <Categories />
        </div>
      </>
    )
  }
}

export default Home