import React from 'react'


import UserTotal from './MonthlyTotalUser'
import UserOwes from './MonthlyTotalUserOwes'
// import ReceiptListItem from './ReceiptListItem'

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

    let owes = ''
    let owesAmount = 0

    if (eduard > tanya) {
      owes = 'Tanya';
      owesAmount = (eduard - tanya) / 2
    } else {
      owes = 'Eduard';
      owesAmount = (tanya - eduard) / 2
    }

    const divStyle = {
      display: 'flex'
    }

    return(
      <div style={divStyle}>
        <UserTotal name="Eduard" amount={eduard}/>
        <UserTotal name="Tanya" amount={tanya}/>
        <UserOwes name={owes} amount={owesAmount}/>
      </div>
    )
  }
}

export default MonthlySum