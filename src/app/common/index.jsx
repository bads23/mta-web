import React, { Component } from 'react'
import Slider from './slider/sliderComponent'
import Categories from '../products/components/categoriesComponent'
import axios from 'axios'
import URLS from '../config/settings'
import Header from './header/header'

class Home extends Component {
  state = {
    Categories: []
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories() {
    axios.get(`${URLS().CATEGORIES}`)
      .then(res => {
        this.setState({ Categories: res.data })
      })
  }

  render() {
    return (
      <>
        <Header />
        <Slider />
        <div className="main-section">
          {
            this.state.Categories.map(category => (
              <Categories category={category} key={category.id} />
            ))
          }
        </div>
      </>
    )
  }
}

export default Home
