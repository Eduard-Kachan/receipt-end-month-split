import React from 'react'
import ReceiptListItem from './ReceiptTableRow'
import './ReceiptTable.css'
import PropTypes from 'prop-types'

const ReceiptList = (props) => {
  const receipts = props.receipts || {}
  const receiptsKeys = Object.keys(receipts)

  return(
    <table className='receiptTable'>
      <tbody>
        {receiptsKeys.map((key) => <ReceiptListItem
          key={key}
          receiptId={key}
          year={props.year}
          month={props.month}
          removeReceipt={props.removeReceipt}
          receipt={receipts[key]}
        />)}
      </tbody>
    </table>
  )
}

ReceiptList.propTypes = {
  year: PropTypes.string.isRequired,
  month: PropTypes.string.isRequired,
  receipts: PropTypes.object.isRequired
}

export default  ReceiptList