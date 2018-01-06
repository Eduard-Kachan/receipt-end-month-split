import React from 'react'

const DateNavigation = (props) => {
  return (
    <div className='text-50 Text-textTransform-uppercase'>
      {(props.month) ? `${props.month}, ` : null} {props.year}
    </div>
  )
}

export default DateNavigation