import React from 'react'

const Loader = () => {
  return (
    <>
      <div id="loadingWrap">
        <div id="fakeLogo">
          <div className="sq-wraps">
            <div className="sq" id="sq1"> </div>
          </div>
          <div className="sq-wraps">
            <div className="sq" id="sq2"> </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Loader