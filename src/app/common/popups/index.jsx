import React from 'react'
// import { Link } from 'react-router-dom'

export const ShowNotify = (item) => {
  var notify = document.getElementById("popup")
  notify.innerHTML = `<p class="lato-m align-center">Item Added to cart</p>`
  notify.style.bottom = "100px"

  setTimeout(() => {
    notify.style.bottom = "-100px"
  }, 5000)
}

const Notify = () => {
  return (
    <>
      <div className="notify popups h-center" id="popup">
      </div>
    </>
  )
}

export default Notify