import React from 'react'
import { MemoryRouter, StaticRouter, Route } from 'react-router-dom'
import { shallow, mount } from 'enzyme'
import UpdateReceiptForm from './ReceiptFormUpdate'
import ReceiptForm from './ReceiptForm'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'
import PropTypes from "prop-types";

configure({ adapter: new Adapter() })

describe('UpdateReceiptForm', () => {
  let mounted
  let props
  let context

  const receiptFormUpdate = () => {
    if (!mounted) {
      mounted = mount(
        <StaticRouter basename="/calendar" context={context}>
          <UpdateReceiptForm {...props} />
        </StaticRouter>
      )
    }
    return mounted
  }

  beforeEach(() => {
    props = {
      calendarRecords: {},
      updateReceipt: jest.fn()
    }

    context = {
      params: {
        month: 'january',
        receiptId: '123456789'
      }
    }

    mounted = undefined
  })

  it('always renders a `ReceiptForm`', () => {
    const d = receiptFormUpdate().find(ReceiptForm).props()
    expect(receiptFormUpdate().find(ReceiptForm).length).toBe(1)
  })

  //TODO: check receipt object
  it('when ', () => {

    props.calendarRecords = {
      'january': {
        'receiptId': {
          'owner': 'user',
          'price': '12345',
          'date': 'date'
        }
      }
    }

    const receiptForm = receiptFormUpdate().find(ReceiptForm)

    expect(receiptForm.prop('owner')).toBe('user')
    expect(receiptForm.prop('price')).toBe(12345)
    expect(receiptForm.prop('date')).toBe('date')
  })

  receiptFormUpdate().find(ReceiptForm).props()

})