import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/utilities/gradient.css'
import PropTypes from 'prop-types'

const MonthlyGridCell = (props) => {
  let url = null;

  if (props.isEmpty) {
    url = {
      pathname: `/add-receipt/${props.year}-${props.month}`,
      state: { modal: true }
    }
  } else {
    url = `/${props.year}-${props.month}`
  }

  return (
    <Link className={`monthlyGrid__cell Gradient-linerGradient-${props.month}`} to={url} >{props.month}{props.isEmpty ? ', empty' : null}</Link>
  )
}

MonthlyGridCell.propTypes = {
  year: PropTypes.number.isRequired,
  month: PropTypes.string.isRequired,
  isEmpty: PropTypes.bool.isRequired
}

export default MonthlyGridCell