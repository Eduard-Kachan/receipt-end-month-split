import React from 'react'
import { shallow } from 'enzyme'
import MonthlyGrid from './MonthlyGrid'
import GridCell from './MonthlyGridCell'
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

describe('MonthlyGridCell', () => {
  let mounted
  let props

  const monthlyGrid = () => {
    if (!mounted) {
      mounted = shallow(
        <MonthlyGrid {...props} />
      )
    }
    return mounted
  }

  beforeEach(() => {
    props = {
      year: 1234,
      calendarRecords: {}
    }

    mounted = undefined
  })

  it('always renders a div', () => {
    expect(monthlyGrid().find('div').length).toBe(1)
  })

  it('always renders 12 GridCell children', () => {
    expect(monthlyGrid().find('div').children().find(GridCell).length).toBe(12)
  })
})