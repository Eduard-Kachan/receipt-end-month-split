import React from 'react'
import { formatPrice } from '../helpers'

const UserOwes = (props) => {

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  return(
    <div style={divStyle}>
      <span className='text-19'>{props.name} owes:</span>
      <span className='Title-titleHeading-1 Text-textTransform-uppercase text-31'>{formatPrice(props.amount)}</span>
    </div>
  )
}

export default UserOwes