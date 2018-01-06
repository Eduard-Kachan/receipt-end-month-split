import React from 'react'
import PropTypes from 'prop-types'

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
            <svg width='20' height='20'>
              <line x1='1' x2='19' y1='1' y2='19' stroke='white' strokeWidth='2'/>
              <line x1='1' x2='19' y1='19' y2='1' stroke='white' strokeWidth='2'/>
            </svg>
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

export default Modal