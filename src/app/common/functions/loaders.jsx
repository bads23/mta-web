import React from 'react'
import Logo from '../assets/svg/MTA-SPIN.svg'

const Loading = () => {
    return (
      <>
        <div id="loadingScreen">
          <div id="loadingWrap">
            <div id='loaderImgDiv'>
              <img src={Logo} alt="Logo" className="logo" id="loaderImg" />
            </div>
            <div id="fakeLogo">
              <div className="sq-wraps">
                <div className="sq" id="sq1"></div>
              </div>
              <div className="sq-wraps">
                <div className="sq" id="sq2"></div>
              </div>
              <div className="sq-wraps">
                <h1>M</h1>
              </div>
            </div>
            <div id="loaderText">
              <span id="main">MOTION</span>
              <span id="other">TALENT AFRICA</span>
            </div>
          </div>
        </div>
      </>
    )
  }

  export default Loading