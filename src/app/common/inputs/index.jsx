import React from 'react'

const Input1 = (props) => {
  return (
    <>
      <div className="input1">
        <label>{props.label}:</label>
        <input type={props.type} placeholder={props.ph} id={props.id} value={props.value} onChange={props.onChange} />
      </div>
    </>
  )
}

export default Input1
