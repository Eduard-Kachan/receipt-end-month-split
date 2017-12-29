import React from 'react'
import {formatPrice} from "../helpers";
import './MonthlyTotal.css'

class MonthlySum extends React.Component {
  constructor(props) {
    super(props)

    this.monthlyTotal = this.monthlyTotal.bind(this);
  }

  monthlyTotal(receipts, user) {
    const receiptsList = receipts || {};
    const receiptsKeys = Object.keys(receiptsList);

    const total = receiptsKeys
      .filter((key) => receiptsList[key].owner === user)
      .map((key) => Number(receiptsList[key].price))

    if (total.length > 0) {
      return total.reduce((accumulator, currentValue) => accumulator + currentValue)
    } else {
      return 0
    }
  }

  render() {
    const tanya = this.monthlyTotal(this.props.receipts, 'Tanya');
    const eduard = this.monthlyTotal(this.props.receipts, 'Eduard');

    let owesAmount = 0

    if (eduard > tanya) {
      owesAmount = (eduard - tanya) / 2
    } else {
      owesAmount = (tanya - eduard) / 2
    }

    return(
      <table className='monthlyTotal'>

        <tbody className='text-19'>
          <tr>
            <td>Eduard's sum:</td>
            <td className='monthlyTotal__tr-right'>{formatPrice(eduard)}</td>
          </tr>
          <tr>
            <td>Tanya's sum:</td>
            <td className='monthlyTotal__tr-right'>{formatPrice(tanya)}</td>
          </tr>
        </tbody>
        <tfoot>
          <tr className='monthlyTotal__foot m-b-15'>
            <td className='text-19 monthlyTotal__tr-left'>Total amount</td>
            <td className='text-31 monthlyTotal__tr-right'>{formatPrice(owesAmount)}</td>
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default MonthlySum