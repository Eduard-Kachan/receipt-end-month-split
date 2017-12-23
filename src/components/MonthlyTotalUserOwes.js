import React from 'react'
import { formatPrice } from '../helpers'

const UserOwes = (props) => {

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  return(
    <div style={divStyle}>
      <span>{props.name} owes:</span>
      <span className='Title-titleHeading-1 Text-textTransform-uppercase'>{formatPrice(props.amount)}</span>
    </div>
  )
}

export default UserOwes