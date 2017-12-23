import React from 'react'
import PropTypes from 'prop-types'

class PriceInput extends React.Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.returnValue({ 'price' : e.target.value })
  }

  render() {
    const className = this.props.className || ''

    return(

      <label
        htmlFor='receiptFormPrice'
        className={`receipt-form__label ${className}`}>
        Price<br/>

        <input
          id='receiptFormPrice'
          defaultValue={this.props.price || null}
          type='number'
          min='0'
          placeholder='Price'
          required={(this.props.isRequired)}
          onChange={this.onChange}/>

      </label>
    )
  }
}

PriceInput.propTypes = {
  returnValue: PropTypes.func.isRequired,
  price: PropTypes.number,
  className: PropTypes.string,
  isRequired: PropTypes.bool
}


export default PriceInput