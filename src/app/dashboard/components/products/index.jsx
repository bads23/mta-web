import React from 'react'
import Right from './right/right'

const index = () => {
  return (
    <>
      <div className="midsection_sm">
        <h2 className="playfair-lg"> Products </h2>
        <div className="fl-btw">
          <div className="item">
              <div className="pr-image"></div>      
              <div className="pr-info">
                <p className="lato-m b">Music Instrument</p>
                <p className="playfair-sm">Ksh 4,989</p>
              </div>
          </div>
        </div>
      </div>

      <Right />
    </>
  )
}

export default index
