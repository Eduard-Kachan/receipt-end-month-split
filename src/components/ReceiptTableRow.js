import React from 'react'
import { Link } from 'react-router-dom'
import { formatPrice } from '../helpers'

const ReceiptListItem = (props) => {
  return(
    <tr className="receiptTable__item">
      <td className="receiptTable__itemName text-19">{props.receipt.owner}</td>
      <td className='text-19'>{formatPrice(props.receipt.price)}</td>
      <td className='text-19'>{props.receipt.date || null}</td>
      <td><Link to={{
        pathname: `/update-receipt/${props.year}-${props.month}/${props.receiptId}`,
        state: { modal: true }
      }}>update</Link></td>
      <td>
        <button
          onClick={() => {props.removeReceipt({year:props.year, month:props.month}, props.receiptId)}}>X</button>
      </td>
    </tr>
  )
}

export default ReceiptListItem