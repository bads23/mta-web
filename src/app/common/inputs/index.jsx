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

export const Select = (props) => {
  return (
    <>
      <div className="input1">
        <label>{props.label}:</label>
        <select value={props.value} onChange={props.onChange}>
          {
            props.options ?
              (
                props.options.map(option => (
                  <option value={option.id}>{option.name}</option>
                ))
              )
              :
              (
                <> <option>No options</option></>
              )
          }
        </select>
      </div>
    </>
  )
}

export const Textarea = (props) => {
  return (
    <>
      <div className="input1">
        <label htmlFor="">{props.label}:</label>
        <textarea value={props.value} onChange={props.onChange}></textarea>
      </div>
    </>
  )
}

export const Checkbox = (props) => {
  return (
    <>
      <div className="input1">
        <label htmlFor="">{props.label}:</label>
        <input type="checkbox" id="checkbox" /><span className="lato-sm grey">{props.ph}</span>
      </div>
    </>
  )
}

export default Input1
