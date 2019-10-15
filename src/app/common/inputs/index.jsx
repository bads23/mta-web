import React from 'react'
import CKEditor from 'ckeditor4-react'
import { promised } from 'q';

const Input1 = (props) => {
  return (
    <>
      <div className="input1">
        <label>{props.label}:</label>
        <input type={props.type} placeholder={props.ph} id={props.id} value={props.value} onChange={props.onChange} onKeyUp={props.onKeyUp}/>
      </div>
    </>
  )
}

export const Select = (props) => {
  return (
    <>
      <div className="input1">
        {
          props.label ? (
            <label>{props.label}:</label>
          ):(<></>)
        }
        <select value={props.value} onChange={props.onChange}>
          <option value=''>--Please choose one--</option>
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
        <textarea value={props.value} onChange={props.onChange} placeholder={props.ph}></textarea>
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

export const Editor = (props) =>{
  return(
    <>
      <div className="input1">
        <label htmlFor="">{props.label}:</label>
        <CKEditor data={props.value} onChange={props.onChange} />
      </div>
    </>
  )
}

export default Input1
