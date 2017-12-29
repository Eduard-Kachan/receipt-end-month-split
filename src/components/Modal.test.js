import React from 'react'
import { shallow } from 'enzyme'
import Modal from './Modal'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

describe('Modal', () => {
  let props
  let mountedModal
  let spy = jest.fn()

  const modal = () => {
    if (!mountedModal) {
      mountedModal = shallow(
        <Modal {...props} />
      )
    }
    return mountedModal
  }

  beforeEach(() => {
    props = {
      children: <div className='my-child'/>,
      history: {
        goBack: jest.fn()
      }
    }
    mountedModal = undefined
  })

  afterEach(() => {
    spy.mockReset()
    spy.mockRestore()
  })

  it('always renders a div', () => {
    const divs = modal().find('div')
    expect(divs.length).toBeGreaterThan(0)
  })

  it('always renders children', () => {
    const wrapper = modal()
    expect(wrapper.contains(<div className='my-child'/>)).toBe(true)
  })

  it('click `go back` button and go back in history', () => {
    const wrapper = modal()
    spy = jest.spyOn(wrapper.instance().props.history, 'goBack')
    wrapper.find('button.modal__closeButton').simulate('click', { stopPropagation() {} })
    expect(spy).toHaveBeenCalled()
  })

  it('click background and go back in history', () => {
    const wrapper = modal()
    spy = jest.spyOn(wrapper.instance().props.history, 'goBack')
    wrapper.find('div.modal__background').simulate('click', { stopPropagation() {} })
    expect(spy).toHaveBeenCalled()
  })
})