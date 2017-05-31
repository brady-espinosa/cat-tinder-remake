import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import {addUser} from '../actions'


class UserAdd extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {
        userName: '',
        email: '',
        firstName: '',
        lastName: '',
        password: ''
      },
      message: ''
    }
  }

  handleChange(e){
    let target = e.target
    let user = this.state.user
    user[target.name] = target.value
    this.setState({
      user: user
    })
  }

  handleSubmit(e){
    e.preventDefault()
    addUser(this.state)
  }

  render(){
    return(
      <div>
        <div className="App-header">
          <h2>Add A User</h2>
          <div className="pull-right">
            <Link to="/">Back</Link>
          </div>
        </div>

        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <label htmlFor='userName'>Username</label>
            <input type='text' name='userName' id='username' value={this.state.user.userName} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
          <label htmlFor='email'>Email</label>
            <input type='text' name='email' id='email' value={this.state.user.email} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
            <label htmlFor='password'>Password</label>
            <input type='password' name='password' id='password' value={this.state.user.password} onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <label htmlFor='firstName'>First Name</label>
            <input type='text' name='firstName' id='firstName' value={this.state.user.firstName} onChange={this.handleChange.bind(this)}>
            </input>
          </div>
          <div className='formGroup'>
            <label htmlFor='lastName'>Last Name</label>
            <input type='text' name='lastName' id='lastName' value={this.state.user.lastName} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
            <input type='submit' value='Save' className='btn btn-primary'></input>
          </div>
        </form>
      </div>
    )
  }
}
export default UserAdd;
