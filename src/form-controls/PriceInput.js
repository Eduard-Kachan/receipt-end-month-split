import React from 'react'
import PropTypes from 'prop-types'
import '../styles/utilities/form.css'

class PriceInput extends React.Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.returnValue({ 'price' : e.target.value })
  }

  render() {
    return(

      <label htmlFor='receiptFormPrice'>
        <span className='Text-textTransform-uppercase'>Price</span>

        <input
          id='receiptFormPrice'
          defaultValue={this.props.price || null}
          type='number'
          min='0'
          placeholder='Price'
          required={(this.props.isRequired)}
          onChange={this.onChange}
          className='priceInput'/>

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