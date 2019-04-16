import React from 'react'
import Right from './right/right'


const index = () => {
  return (
    <>
      <div className="midsection">
        <h2 class="playfair-lg">Dashboard</h2>

        <div class="graph"> </div>

        <div class="fl-btw">
          <div class="analytics"></div>
          <div class="analytics"></div>
          <div class="analytics"></div>
        </div>
      </div>
      <Right />
    </>
  )
}

export default index
