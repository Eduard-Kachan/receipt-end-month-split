import React from 'react'
import { mount } from 'enzyme'
import ReceiptForm from './ReceiptForm'
import OwnerSelect from '../form-controls/OwnerSelect'
import PriceInput from '../form-controls/PriceInput'
import DateSelect from '../form-controls/DateSelect'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

describe('ReceiptForm', () => {
  let props
  let mountedReceiptForm
  let spy = jest.fn()

  const receiptForm = () => {
    if (!mountedReceiptForm) {
      mountedReceiptForm = mount(
        <ReceiptForm {...props} />
      )
    }
    return mountedReceiptForm
  }

  beforeEach(() => {
    props = {
      match: {
        params: {
          year: '1234',
          month: 'january'
        }
      },
      history: {
        goBack: jest.fn()
      },
      title: 'Form title',
      submitButtonMessage: 'submit',
      submit: jest.fn(),
      isGoBackOnSubmit: null,
      owner: null,
      price: null,
      date: null
    }
    mountedReceiptForm = undefined
  })

  afterEach(() => {
    spy.mockReset()
    spy.mockRestore()
  })

  it('always renders a form', () => {
    expect(receiptForm().find('form').length).toBe(1)
  })

  it('expect to find title tag with text from prop', () => {
    props.title = 'test title';
    const title = receiptForm().find('h2')
    expect(title.length).toBe(1)
    expect(title.text()).toBe('test title')
  })

  it('expect to find submit button tag with text from prop', () => {
    props.submitButtonMessage = 'test message';
    const button = receiptForm().find('button[type="submit"]')
    expect(button.length).toBe(1)
    expect(button.text()).toBe('test message')
  })

  it('always renders a `OwnerSelect`', () => {
    expect(receiptForm().find(OwnerSelect).length).toBe(1)
  })

  it('always renders a `PriceInput`', () => {
    expect(receiptForm().find(PriceInput).length).toBe(1)
  })

  it('always renders a `DateSelect`', () => {
    expect(receiptForm().find(DateSelect).length).toBe(1)
  })

  it('receipt owner should not be null', () => {
    expect(receiptForm().instance().receipt.owner !== null).toBe(true)
  })

  it('receipt object should be updated with props', () => {
    props.owner = 'Tanya'
    props.price = 1234
    props.date = '2017-01-01'

    const wrapper = receiptForm()

    expect(wrapper.instance().receipt.owner).toBe('Tanya')
    expect(wrapper.instance().receipt.price).toBe(1234)
    expect(wrapper.instance().receipt.date).toBe('2017-01-01')
  })

  it('expect receipt object to update when `updateReceipt` called', () => {
    const wrapper = receiptForm()

    wrapper.instance().updateReceipt({
      'price': 1234
    })

    expect(wrapper.instance().receipt.price).toBe(1234)

    wrapper.instance().updateReceipt({
      'owner': 'Tanya',
      'date': '2017-01-01'
    })

    expect(wrapper.instance().receipt.owner).toBe('Tanya')
    expect(wrapper.instance().receipt.date).toBe('2017-01-01')
  })

  it('expect to call `props.submit` on form submit', () => {
    const wrapper = receiptForm()
    spy = jest.spyOn(wrapper.instance().props, 'submit')
    wrapper.find('form').simulate('submit')
    expect(spy).toHaveBeenCalled()
  })

  it('expect to reset form on form submit', () => {
    const wrapper = receiptForm()
    spy = jest.spyOn(wrapper.instance().receiptForm, 'reset')
    wrapper.find('form').simulate('submit')
    expect(spy).toHaveBeenCalled()
  })

  it('expect to call `props.history.submit` on form submit when `isGoBackOnSubmit` true', () => {
    props.isGoBackOnSubmit = true
    const wrapper = receiptForm()
    spy = jest.spyOn(wrapper.instance().props.history, 'goBack')
    wrapper.find('form').simulate('submit')
    expect(spy).toHaveBeenCalled()
  })
})