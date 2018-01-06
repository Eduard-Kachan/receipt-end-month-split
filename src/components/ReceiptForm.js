import React from 'react'
import OwnerSelect from '../form-controls/OwnerSelect'
import PriceInput from '../form-controls/PriceInput'
import DateSelect from '../form-controls/DateSelect'
import PropTypes from 'prop-types'

class ReceiptForm extends React.Component {

  constructor(props) {
    super(props)

    this.updateReceipt = this.updateReceipt.bind(this)
    this.submitForm = this.submitForm.bind(this)

    this.receipt = {
      owner: this.props.owner || 'Eduard',
      price: this.props.price || null,
      date: this.props.date || null
    }
  }

  updateReceipt(receipt) {
    this.receipt = Object.assign(this.receipt, receipt)
  }

  submitForm(e) {
    e.preventDefault();

    this.props.submit(
      {
        year:this.props.match.params.year,
        month: this.props.match.params.month
      },
      this.receipt,
      this.props.match.params.receiptId
    )

    if (this.props.isGoBackOnSubmit) {
      this.props.history.goBack()
    } else {
      this.receiptForm.reset()
    }
  }

  render() {

    // TODO Forms must not have a 'defaultValue' it does not update when props update
    return (
      <div>

        <h2 className="receiptForm__title text-31 m-b-15">{this.props.title}</h2>

        <form
          className="receiptForm__form"
          ref={(input) => this.receiptForm = input }
          onSubmit={(e) => this.submitForm(e)}>

          <div className='m-b-15'>
            <OwnerSelect
              owner={this.props.owner || 'Eduard'}
              isRequired={true}
              className='receiptForm__nameInput'
              returnValue={this.updateReceipt}/>
          </div>

          <div className='m-b-15'>
            <PriceInput
              price={this.props.price}
              isRequired={true}
              className='receiptForm__priceInput'
              returnValue={this.updateReceipt}/>
          </div>

          <div className='m-b-15'>
            <DateSelect
              date={this.props.date}
              isRequired={true}
              className='receiptForm__dateInput'
              returnValue={this.updateReceipt}/>
          </div>

          <button
            className="receiptForm__submitInput receiptForm__button text-19"
            type="submit">
            {this.props.submitButtonMessage}
          </button>

        </form>
      </div>
    )
  }
}

ReceiptForm.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      year: PropTypes.string.isRequired,
      month: PropTypes.string.isRequired,
      receiptId: PropTypes.string
    })
  }),
  history: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  submitButtonMessage: PropTypes.string.isRequired,
  submit: PropTypes.func.isRequired,
  isGoBackOnSubmit: PropTypes.bool,
  owner: PropTypes.string,
  price: PropTypes.number,
  date: PropTypes.string
}

export default ReceiptForm