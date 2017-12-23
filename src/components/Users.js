import React from 'react'
import { Route, Link } from 'react-router-dom'
import base from '../base'

class Users extends React.Component {

  constructor() {
    super()

    this.renderUser = this.renderUser.bind(this)
    this.createUser = this.createUser.bind(this)
    this.createUserForm = this.createUserForm.bind(this)
  }

  renderUser(key) {
    return(
      <div key={key}><strong>{this.props.users[key].name}</strong></div>
    )
  }

  createUser(e) {
    e.preventDefault()

    const name = this.name.value
    const email = this.email.value
    const password = this.password.value

    base.auth().createUserWithEmailAndPassword(email, password)
      .then((user) => {
        this.props.addUser(user.uid, {name: name})
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  componentWillMount() {
    console.log('Users will mount')
  }

  componentDidMount() {
    console.log('Users did mount')
  }


  createUserForm = () => {
    // TODO form throws and error when user goes back
    return (
      <div>
      {/*<form ref={(input) => this.createUserForm = input } onSubmit={(e) => this.createUser(e)}>*/}
        {/*<input ref={(input) => this.name = input} type="text" placeholder="Name"/><br/>*/}
        {/*<input ref={(input) => this.email = input} type="email" placeholder="Email"/><br/>*/}
        {/*<input ref={(input) => this.password = input} type="password" placeholder="Password"/><br/>*/}
        {/*<button type="submit">Create User</button>*/}
      {/*</form>*/}
      </div>
    )
  }

  render() {

    console.log('Users render')

    const addURL = `${this.props.match.url}/add`

    return (
      <div>
        { this.props.location.pathname === addURL ? null : <Link to={addURL}>Add</Link> }
        <Route path={addURL} render={this.createUserForm}/>
        {Object.keys(this.props.users).map(this.renderUser)}
      </div>
    )
  }
}

export default Users