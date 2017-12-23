import React from 'react'
// import { Link } from 'react-router-dom'
import './DateNavigation.css'
import '../styles/utilities/title.css'
import '../styles/utilities/text.css'

const DateNavigation = (props) => {
  return (
    <div className='Title-titleHeading-1 Text-textTransform-uppercase'>
      {(props.month) ? `${props.month}, ` : null} {props.year}
    </div>
  )
}

export default DateNavigation