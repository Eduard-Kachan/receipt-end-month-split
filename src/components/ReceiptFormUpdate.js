import React from 'react'
import ReceiptForm from './ReceiptForm'
import PropTypes from 'prop-types'

const UpdateReceiptForm = (props) => {

  let receipt = {}

  if (Object.keys(props.calendarRecords).length > 0) {
    receipt = props.calendarRecords[props.match.params.month][props.match.params.receiptId]
  }

  return(
    <ReceiptForm {...props}
      isGoBackOnSubmit={true}
      owner={receipt.owner || null}
      price={Number(receipt.price) || null}
      date={receipt.date || null}
      submit={props.updateReceipt}
      submitButtonMessage='Update'
      title='Update Receipt'/>
  )
}

UpdateReceiptForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      month: PropTypes.string.isRequired,
      receiptId: PropTypes.string.isRequired
    })
  }),
  calendarRecords: PropTypes.object.isRequired,
  updateReceipt: PropTypes.func.isRequired
}

export default UpdateReceiptForm