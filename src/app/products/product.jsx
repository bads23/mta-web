import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import formatter from '../common/functions/formatter'

class ProductDetails extends Component {

  state = {
    product: {}
  }

  componentDidMount() {
    this.getProduct()
  }

  getProduct() {
    axios.get(`http://localhost:8000/catalog/` + this.props.match.params.id + `/`)
      .then(res => {
        this.setState({ product: res.data })
      })
  }


  render() {
    return (
      <>
        <div id="top-bar">

        </div>

        <div className="middle-section">
          <div className="product-container">
            <div className="image-container">
              <img src="./img/Drumx2.png" alt="drum" />
            </div>

            <div className="text-container">
              <h1 className="playfair-xlg mg-v-20">{this.state.product.name}</h1>
              <p className="lato-m">{this.state.product.description}</p>
              &nbsp;

              {/* <h1 className="playfair-lg mg-v-10">Features</h1> */}

              {/* <ul className="lato-m">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>

              </ul> */}
              <p className="playfair-xlg mg-v-50 gold">
                <span>Ksh </span>
                {this.state.product ? this.state.product.price : ''}
              </p>
              <Link to="/cart/">
                <button className="btn-black mg-v-20">
                  Add to Cart
              </button>
              </Link>
            </div>
          </div>

          {/* <Categories /> */}
        </div>

      </>
    )
  }
}


export default ProductDetails