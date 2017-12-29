import React from 'react'
import PropTypes from 'prop-types'
import '../styles/utilities/form.css'

class UserSelect extends React.Component {

  constructor() {
    super()

    this.onChange = this.onChange.bind(this)

    this.state = {
      selectedOption: 'Eduard'
    }
  }

  onChange(e) {
    this.setState({
      selectedOption: e.target.value
    })
  }

  componentWillUpdate(nextProps, nextState) {
    this.props.returnValue({ 'owner' : nextState.selectedOption })
    return true
  }

  render() {
    return(
      <div>
        <span className='Text-textTransform-uppercase text-12'>Owner</span>

        <radiogroup className='userSelect' onChange={this.onChange}>

          <input
            className='userSelect__input'
            id='eduard' type='radio'
            name='userSelect'
            value='Eduard'
            checked={this.state.selectedOption === 'Eduard'}
            required={true}
            onChange={this.onChange}/>

          <label className='userSelect__label text-19' htmlFor='eduard'>Eduard</label>

          <input
            className='userSelect__input'
            id='tanya'
            type='radio'
            name='userSelect'
            value='Tanya'
            checked={this.state.selectedOption === 'Tanya'}
            onChange={this.onChange}/>

          <label className='userSelect__label text-19' htmlFor='tanya'>Tanya</label>

        </radiogroup>
      </div>
    )
  }
}

UserSelect.propTypes = {
  returnValue: PropTypes.func.isRequired,
  owner: PropTypes.string.isRequired
}


export default UserSelect