import React from 'react'
import OwnerSelect from './OwnerSelect'
import { shallow, configure } from "enzyme"
import Adapter from 'enzyme-adapter-react-15'

configure({ adapter: new Adapter() })

describe('OwnerSelect', () => {
  let props
  let mounted
  let spy = jest.fn()

  const ownerSelect = () => {
    if (!mounted) {
      mounted = shallow(
        <OwnerSelect {...props}/>
      )
    }
    return mounted
  }

  beforeEach(() => {
    props = {
      owner: 'Eduard',
      returnValue: jest.fn()
    }
    mounted = undefined
  })

  afterEach(() => {
    spy.mockReset()
    spy.mockRestore()
  })

  it('always renders a div', () => {
    expect(ownerSelect().find('div').length).toBe(1)
  })

  it('always renders `radiogroup` with inputs', () => {
    const wrapper = ownerSelect()

    const radiogroup = wrapper.find('radiogroup')
    expect(radiogroup.length).toBe(1)

    const radioInputs = radiogroup.find('input[type="radio"]')
    expect(radioInputs.length).toBe(2)
  })

  // it('should run `returnValue` when radio selected', () => {
  //   const mountReturnValue = jest.fn()
  //   props.returnValue = mountReturnValue
  //
  //   const wrapper = ownerSelect()
  //
  //   const eduard = wrapper.find('input[value="Eduard"]')
  //   const tanya = wrapper.find('input[value="Tanya"]')
  //
  //   tanya.simulate('change')
  //
  //
  //   expect(mountReturnValue.mock.calls.length).toBe(2);
  // })

})