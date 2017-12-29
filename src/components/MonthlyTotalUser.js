import React from 'react'
import { formatPrice } from '../helpers'

const UserTotal = (props) => {

  const divStyle = {
    display: 'flex',
    flexDirection: 'column',
  }

  return(
    <div style={divStyle}>
      <span className='text-19'>{props.name}'s sum:</span>
      <span className='Title-titleHeading-1 Text-textTransform-uppercase text-31'>{formatPrice(props.amount)}</span>
    </div>
  )
}

export default UserTotal