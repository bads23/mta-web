import React, { Component } from 'react'
import Categories from './components/categoriesComponent'

class ProductDetails extends Component {
  render() {
    return (
      <>
        <div id="top-bar">

        </div>

        <div className="middle-section">
          <div class="product-container">
            <div class="image-container">
              <img src="./img/Drumx2.png" />
            </div>

            <div class="text-container">
              <h1 class="playfair-xlg mg-v-20">5 Piece Drum Set</h1>
              <p class="lato-m">Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
                  explicabo assumenda asperiores atque, quod ducimus dicta, at iusto unde adipisci,
                  itaque qui molestiae maiores delectus! Magnam pariatur quibusdam nihil reiciendis.
                </p>
              &nbsp;
            <h1 class="playfair-lg mg-v-10">Features</h1>

              <ul class="lato-m">
                <li>Feature 1</li>
                <li>Feature 2</li>
                <li>Feature 3</li>
                <li>Feature 4</li>
              </ul>
              <p className="playfair-xlg mg-v-50 gold">
                <span>Ksh </span>
                53,213
              </p>
              <a href="cart.html">
                <button class="btn-black mg-v-20">
                  Add to Cart
              </button>
              </a>
            </div>
          </div>

          <Categories />
        </div>

      </>
    )
  }
}


export default ProductDetails