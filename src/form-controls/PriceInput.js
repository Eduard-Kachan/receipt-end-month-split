import React from 'react'
import PropTypes from 'prop-types'

class PriceInput extends React.Component {

  constructor() {
    super()

    this.onChange = this.onChange.bind(this)

    this.state = {
      value: ''
    }
  }

  onChange(e) {
    this.setState({value: e.target.value.replace(/\D/g,'')})
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.returnValue({ 'price' : nextState.value })
    return true
  }

  render() {

    let value

    if (this.state.value === '') {
      value = ''
    } else {
      if (this.state.value.length <= 2) {
        value = '¢' + this.state.value
      } else {
        value = '$' + this.state.value.slice(0, -2) + '.' + this.state.value.slice(-2)
      }
    }

    return(

      <label htmlFor='receiptFormPrice'>
        <span className='Text-textTransform-uppercase text-12'>Price</span>

        <input
          id='receiptFormPrice'
          value={value}
          type='text'
          placeholder='Price'
          required={true}
          onChange={this.onChange}
          className='priceInput inputClearStyles text-19'/>
        <div className='priceInput__underLine'/>

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