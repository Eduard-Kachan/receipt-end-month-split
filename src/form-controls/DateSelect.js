import React from 'react'
import PropTypes from 'prop-types'


class DateSelect extends React.Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.returnValue({ 'date' : e.target.value })
  }

  render() {
    const today = new Date()
    const defaultDate = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate()
    const className = this.props.className || ''

    return(

      <label
        htmlFor='receiptFormDate'
        className={`receipt-form__label ${className}`}>
        Date<br/>

        <input
          id='receiptFormDate'
          defaultValue={this.props.date || defaultDate}
          type='date'
          required={(this.props.isRequired)}
          onChange={this.onChange}/>

      </label>
    )
  }
}

DateSelect.propTypes = {
  returnValue: PropTypes.func.isRequired,
  date: PropTypes.string,
  className: PropTypes.string,
  isRequired: PropTypes.bool
}


export default DateSelect