import React, { createContext, useState, useEffect } from 'react'
import getMonth, { getDay } from '../functions/dates'


export const DateContext = createContext()

const DateProvider = (props) => {

  var obj = new Date()

  const [date, setDate] = useState({})

  const DateInfo = {
    date: obj.getDate(),
    day: getDay(obj.getDay()),
    year: obj.getFullYear(),
    month: getMonth(obj.getMonth())
  }

  useEffect(() => {
    setDate(DateInfo)
  }, {})



  return (
    <DateContext.Provider value={date}>
      {props.children}
    </DateContext.Provider>
  )
}

export default DateProvider