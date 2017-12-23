import React from 'react'
import MonthlyGrid from '../components/MonthlyGrid'
import Navigation from '../components/DateNavigation'

const YearlyCalendar = (props) => {
  return (
    <div>
      <header className='contentHeader'>
        <div className='contentWrapper'>
          <Navigation year={props.year}/>
        </div>
      </header>
      <div className='contentWrapper'>
        <MonthlyGrid year={props.year} calendarRecords={props.calendarRecords}/>
      </div>
    </div>
  )
}

export default YearlyCalendar