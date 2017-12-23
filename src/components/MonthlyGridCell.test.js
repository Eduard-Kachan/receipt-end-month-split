import React from 'react'
import { shallow } from 'enzyme'
import MonthlyGridCell from './MonthlyGridCell'
import { Link } from 'react-router-dom'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

describe('MonthlyGridCell', () => {
  let props
  let mountedMonthlyGridCell

  const monthlyGridCell = () => {
    if (!mountedMonthlyGridCell) {
      mountedMonthlyGridCell = shallow(
        <MonthlyGridCell {...props} />
      )
    }
    return mountedMonthlyGridCell
  }

  beforeEach(() => {
    props = {
      year: 1234,
      month: 'january',
      isEmpty: false
    }

    mountedMonthlyGridCell = undefined
  })

  it('always renders a Link', () => {
    expect(monthlyGridCell().find(Link).length).toBe(1)
  })

  it('when `isEmpty` is false: link to monthly view', () => {
    const link = monthlyGridCell().find(Link).find({to: '/1234-january'})
    expect(link.length).toBe(1)
  })

  it('when `isEmpty` is true: link to add-receipt modal', () => {
    props.isEmpty = true;

    const link = monthlyGridCell().find(Link).find({to: {
        pathname: '/add-receipt/1234-january',
        state: { modal: true }
      }})
    expect(link.length).toBe(1)
  })
})