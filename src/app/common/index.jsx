import React, { Component } from 'react'
import Categories from '../products/components/categoriesComponent'
import axios from 'axios'
import URLS from '../config/settings'
import Header from './header/header'
import Loader from '../common/loader'
import AdBanner from '../common/ads'


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
        <div id="top-bar"></div>
        {/* <Slider /> */}
        <div className="middle-section">
        <AdBanner />
        
          {
            this.state.Categories.length > 1 ? (
              this.state.Categories.map(category =>
                  <Categories category={category} key={category.id} />
              )
            ) : (
              <Loader/>
            )
          }
        </div>
      </>
    )
  }
}

export default Home
