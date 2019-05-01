import React from 'react'
import Right from './right/right'


const index = () => {
  return (
    <>
      <div className="midsection">
        <h2 className="playfair-lg">Dashboard</h2>

        <div className="graph"> </div>

        <div className="fl-btw">
          <div className="analytics"></div>
          <div className="analytics"></div>
          <div className="analytics"></div>
        </div>
      </div>
      <Right />
    </>
  )
}

export default index
