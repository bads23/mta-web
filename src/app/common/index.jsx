import React, { Component } from 'react'
import Slider from './slider/sliderComponent'
import Categories from '../products/components/categoriesComponent'
import axios from 'axios'

class Home extends Component {
  state = {
    Categories: []
  }

  componentDidMount() {
    this.getCategories()
  }

  getCategories() {
    axios.get('http://localhost:8000/categories/')
      .then(res => {
        this.setState({ Categories: res.data })
      })
  }

  render() {
    return (
      <>
        <Slider />
        <div className="main-section">
          {
            this.state.Categories.map(category => (
              <Categories category={category} key={category.id}/>
            ))
          }
        </div>
      </>
    )
  }
}

export default Home