import React from 'react'
import PropTypes from 'prop-types'
import './Modal.css'

class Modal extends React.Component {

  constructor(props) {
    super(props)

    this.goBack = this.goBack.bind(this)
    this.clickOutsideOfModal = this.clickOutsideOfModal.bind(this)
  }

  goBack(e) {
    e.stopPropagation()
    this.props.history.goBack()
  }

  clickOutsideOfModal(e) {
    e.stopPropagation()
    if (e.target === this.modalBackground) {
      this.goBack(e)
    }
  }

  render() {
    return (
      <div className='modal__background' ref={(div) => this.modalBackground = div} onClick={this.clickOutsideOfModal}>
        <div className='modal'>
          <button type='button' onClick={this.goBack} className='modal__closeButton'>
            Close
          </button>
          {this.props.children}
        </div>
      </div>
    )
  }

}

Modal.propTypes = {
  children: PropTypes.element.isRequired,
  history: PropTypes.object.isRequired
}

export default Modal;