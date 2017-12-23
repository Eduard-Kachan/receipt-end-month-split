import React from 'react'
import PropTypes from 'prop-types'

class UserSelect extends React.Component {

  constructor() {
    super()
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.props.returnValue({ 'owner' : e.target.value })
  }

  render() {
    const className = this.props.className || ''

    return(
      <label
        htmlFor='receiptFormOwner'
        className={`receipt-form__label ${className}`}>
        Owner<br/>
        <select
          id='receiptFormOwner'
          defaultValue={this.props.owner}
          className='receipt-form__select'
          required={(this.props.isRequired)}
          onChange={this.onChange}>

          <option key='Eduard' value='Eduard' >Eduard</option>
          <option key='Tanya' value='Tanya'>Tanya</option>
        </select>
      </label>
    )
  }
}

UserSelect.propTypes = {
  returnValue: PropTypes.func.isRequired,
  owner: PropTypes.string.isRequired,
  className: PropTypes.string,
  isRequired: PropTypes.bool
}


export default UserSelect