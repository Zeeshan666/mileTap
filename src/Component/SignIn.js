import React, { Component } from 'react'
import Swal from 'sweetalert2'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    if(this.state.email ==="" || this.state.password===""){
       
      Swal.fire({
        type: 'error',
        title: 'Oops...',
        text: 'plz fill form !',
      })
    }else{
   
      console.log(this.state);
      this.props.history.push('/home')
      Swal.fire(
        'login Success!',
        '',
        'success'
      )
    }
   
  }
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
          <h5 className="grey-text text-darken-3">Sign In</h5>
          <div className="input-field">
            <label htmlFor="email">Email</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">Password</label>
            <input type="password" id='password' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <button className="btn btn-large pink lighten-1 z-depth-0">Login</button>
          </div>
        </form>
        
      </div>
    )
  }
}

export default SignIn