import React, { Component } from 'react';
import {Link} from 'react-router-dom'

class CatAdd extends Component {
  constructor(props){
    super(props)
    this.state = {
      cat: {
        color: '',
        breed: '',
        gender: '',
        habitat: '',
        personality: '',
        age: 1
      },
      message: ''
    }
  }

  handleChange(e){
    let target = e.target
    let cat = this.state.cat
    cat[target.name] = target.value
    this.setState({
      cat: cat
    })
  }

  handleSubmit(e){
    var appScope = this
    e.preventDefault()
    // set up the headers and request
    const params = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(this.state)
    }
    // send state to the backend server
    fetch("http://localhost:4000/create_cat", params).then(function(response){
      // if post is successful update the message to be successful
      // and update the state to equal what we get back from the server
      if(response.status === 200){
        response.json().then(function(body){
          appScope.setState({
            cat: body.cat,
            message: 'successfully created cat profile'
          })
        })
      } else {
        this.setState({
          message: 'error'
        })
        // else update the message to say there was a failure
      }
    }).catch(function(error){
      this.setState({
        message: 'there was an error: ' + error.errors.join("\n")
      })
    })

  }

  render(){
    return(
      <div>
        <div className="App-header">
          <h2>Add A Cat</h2>
          <div className="pull-right">
            <Link to="/">Back</Link>
          </div>
        </div>
        {this.state.message}

        <form className='form' onSubmit={this.handleSubmit.bind(this)}>
          <div className='formGroup'>
            <label htmlFor='color'>Color</label>
            <input type='text' name='color' id='color' value={this.state.cat.color} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
          <label htmlFor='breed'>Breed</label>
          <input type='text' name='breed' id='breed' value={this.state.cat.breed} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
            <label htmlFor='gender'>Gender</label>
            <select name='gender' id='gender' value={this.state.cat.gender} onChange={this.handleChange.bind(this)}>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
          </div>
          <div className='formGroup'>
            <label htmlFor='habitat'>Habitat</label>
            <select name='habitat' id='habitat' value={this.state.cat.habitat} onChange={this.handleChange.bind(this)}>
              <option>Indoor</option>
              <option>Outdoor</option>
              <option>Feral</option>
            </select>
          </div>
          <div className='formGroup'>
            <label htmlFor='personality'>Personality</label>
            <input type='text' name='personality' id='personality' value={this.state.cat.personality} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
            <label htmlFor='age'>Age</label>
            <input type='number' name='age' id='age' value={this.state.cat.age} onChange={this.handleChange.bind(this)}></input>
          </div>
          <div className='formGroup'>
            <input type='submit' value='Save' className='btn btn-primary'></input>
          </div>
        </form>
      </div>
    )
  }
}
export default CatAdd;