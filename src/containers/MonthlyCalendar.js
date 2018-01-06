import React from 'react'
import { Link } from 'react-router-dom'
import ReceiptTable from '../components/ReceiptTable'
import MonthlyTotal from '../components/MonthlyTotal'
import Navigation from '../components/DateNavigation'
import '../styles/scrollContentArea.css'
import '../styles/utilities/gradient.css'
import '../styles/utilities/text.css'

const MonthlyCalendar = (props) => {

  const year = props.match.params.year
  const month = props.match.params.month

  return(
    <div className='scrollContentAreaColumn scrollContentAreaColumn--viewHeight'>
      <header className={`contentHeader Text-textColor-white scrollContentAreaColumn__fixedAreal Gradient-linerGradient-${props.match.params.month}`}>
        <div className='contentWrapper'>
          <div className='m-b-30'>
            <Navigation year={year} month={month}/>
          </div>
          <MonthlyTotal receipts={props.calendarRecords[month]} />
          <Link className='button button--link button--white text-19' to={{
            pathname: `/add-receipt/${year}-${month}`,
            state: { modal: true }
          }}>Add new</Link>
        </div>
      </header>
      <div className='scrollContentAreaColumn__scrollArea'>
        <div className='contentWrapper m-t-15 m-b-15'>
          <ReceiptTable
            year={year}
            month={month}
            removeReceipt={props.removeReceipt}
            receipts={props.calendarRecords[month] || {}} />
        </div>
      </div>
    </div>
  )
}

export default MonthlyCalendar