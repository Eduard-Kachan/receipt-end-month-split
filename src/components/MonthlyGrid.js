import React from 'react'
import GridCell from './MonthlyGridCell'
import { monthsOfYear } from '../helpers'
import PropTypes from 'prop-types'


const MonthlyGrid = (props) => {
  return (
    <div className="monthlyGrid">
      {monthsOfYear.map((month) => <GridCell
        key={month}
        isEmpty={props.calendarRecords[month] === undefined}
        month={month}
        year={props.year}/>
      )}
    </div>
  )
}

MonthlyGrid.propTypes = {
  year: PropTypes.number.isRequired,
  calendarRecords: PropTypes.object.isRequired
}

export default MonthlyGrid