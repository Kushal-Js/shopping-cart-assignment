import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './Register.css';


class Login extends Component {
  render() {
    return (
      <div className="login-container">

        <div className="login-info">
          <span className="login-text"><h1>Signup</h1></span>
          <span>We don not share your personal details with anyone.</span>
        </div>

        <div className="login-form-container">
          <form method="post" action="/home" className="register-form">
            <div id="firstNameContainer" className="login-input">
              <TextField id="floating-center-title" label="First Name" linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div id="lastNameContainer" className="login-input">
              <TextField id="floating-center-title" label="Last Name" linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div id="emailContainer" className="login-input">
              <TextField id="floating-center-title" label="Email" linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div id="pswdContainer" className="login-input">
              <TextField id="floating-center-title" label="Password" linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div id="confPswdContainer" className="login-input">
              <TextField id="floating-center-title" label="Confirm Password" linedirection="center" className="md-cell md-cell--bottom" required />
            </div>

            <button className="login-button w3-button w3-pink" type="submit">Signup</button>
          </form>
        </div>

      </div>
    )
  }
}
export default Login;