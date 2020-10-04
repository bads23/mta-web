import React, { Component } from 'react'
import Categories from '../products/components/categoriesComponent'
import Api from '../config/api'
import Header from '../common/header/header'
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
    Api.categories.get()
    .then(res => {
      this.setState({ Categories: res.data })
    })
  }

  render() {
    return (
      <>
        <Header />
        <div id="top-bar"></div>
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
