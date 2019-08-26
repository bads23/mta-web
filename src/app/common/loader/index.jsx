import React from 'react'

const Loader = () => {
  return (
    <>
      <div className="loaderGif align-center">
        <span><i className="fas fa-spinner fa-spin xxlg-text"></i></span>
        <span><p className="lato-m mg-v-20">Loading...</p></span>
      </div>
    </>
  )
}

export default Loader