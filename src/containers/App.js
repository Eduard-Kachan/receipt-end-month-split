import React from 'react'
import base from'../base'
import { Route, Switch } from 'react-router-dom'
import YearlyCalendar from './YearlyCalendar'
import MonthlyCalendar from './MonthlyCalendar'
import ReceiptForm from '../components/ReceiptForm'
import UpdateReceiptForm from '../components/ReceiptFormUpdate'
import Modal from '../components/Modal'

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      year: 2017,
      month: 'november',
      calendarRecords: {}
    }

    this.previousLocation = this.props.location

    this.addReceipt = this.addReceipt.bind(this)
    this.updateReceipt = this.updateReceipt.bind(this)
    this.removeReceipt = this.removeReceipt.bind(this)
  }

  myMonthlyCalendar = (props) => {
    return (
      <MonthlyCalendar {...props} calendarRecords={this.state.calendarRecords} removeReceipt={this.removeReceipt}/>
    )
  }

  myYearlyCalendar = (props) => {
    return (
      <YearlyCalendar {...props} year={this.state.year} calendarRecords={this.state.calendarRecords}/>
    )
  }

  myModalAddReceiptForm = (props) => {
    return(
      <Modal {...props}>
        <ReceiptForm
          {...props}
          // users={this.state.users}
          submit={this.addReceipt}
          submitButtonMessage="Add"
          title="Add Receipt"/>
      </Modal>
    )
  }

  myModalUpdateReceiptForm = (props) => {
    return(
      <Modal {...props}>
        <UpdateReceiptForm {...props} calendarRecords={this.state.calendarRecords} updateReceipt={this.updateReceipt}/>
      </Modal>
    )
  }

  addReceipt(date, receipt) {

    //TODO: add to database if not the same year
    if (Number(date.year) !== this.state.year) return

    const calendarRecords = {...this.state.calendarRecords}

    if (calendarRecords[date.month] === undefined) {
      calendarRecords[date.month] = {}
    }

    const timestamp = Date.now();
    calendarRecords[date.month][`receipt-${timestamp}`] = receipt;
    this.setState({calendarRecords})
  }

  updateReceipt(date, receipt, receiptId) {

    //TODO: update in database if not the same year
    if (Number(date.year) !== this.state.year) return

    const calendarRecords = {...this.state.calendarRecords}

    // ERROR: no such month > create receipt
    if (calendarRecords[date.month] === undefined) {
      return
    }

    calendarRecords[date.month][receiptId] = receipt;

    this.setState({calendarRecords})
  }

  removeReceipt(date, receiptId) {
    if (Number(date.year) !== this.state.year) return

    const calendarRecords = {...this.state.calendarRecords}

    // ERROR: no such month > create receipt
    if (calendarRecords[date.month] === undefined) {
      return
    }

    calendarRecords[date.month][receiptId] = null;

    this.setState({calendarRecords})
  }

  componentWillMount() {
    this.ref = base.syncState(`${this.state.year}`, {
      context: this,
      state: 'calendarRecords'
    })

    // this.ref = base.syncState('users', {
    //   context: this,
    //   state: 'users'
    // })
  }

  componentWillUpdate(nextProps) {
    const { location } = this.props

    if (
      nextProps.history.action !== 'POP' &&
      (!location.state || !location.state.modal)
    ) {
      this.previousLocation = this.props.location
    }
  }

  render() {

    const date = ':year(\\b\\d{4})-:month(january|february|march|april|may|june|july|august|september|october|november|december)'

    const { location } = this.props
    const isModal = !!(
      location.state &&
      location.state.modal &&
      this.previousLocation !== location // not initial render
    )

    return (
      <div className='flex-it'>
        <div className='side-panel'>

        </div>
        <Switch location={ isModal ? this.previousLocation : location }>
          <Route path="/" exact component={ this.myYearlyCalendar } />
          <Route path={`/${date}`} exact component={ this.myMonthlyCalendar } />
          <Route path={`/add-receipt/${date}`} exact render={ this.myModalAddReceiptForm } />
          <Route path={`/update-receipt/${date}/:receiptId`} exact render={ this.myModalUpdateReceiptForm } />
        </Switch>
        {isModal ? <Route path={`/add-receipt/${date}`} render={ this.myModalAddReceiptForm } /> : null}
        {isModal ? <Route path={`/update-receipt/${date}/:receiptId`} render={ this.myModalUpdateReceiptForm } /> : null}
      </div>
    )
  }
}

export default App;

