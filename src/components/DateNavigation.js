import React from 'react'
import './DateNavigation.css'
import '../styles/utilities/title.css'
import '../styles/utilities/text.css'

const DateNavigation = (props) => {
  return (
    <div className='text-50 Text-textTransform-uppercase'>
      {(props.month) ? `${props.month}, ` : null} {props.year}
    </div>
  )
}

export default DateNavigation