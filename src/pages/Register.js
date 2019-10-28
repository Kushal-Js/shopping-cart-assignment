import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  render() {
    return (
      <div className="login-container">

        <div className="login-info">
          <span className="login-text"><h1>Signup</h1></span>
          <span>We don not share your persoanl details with anyone.</span>
        </div>

        <div className="login-form-container">
          <form method="post" action="/home" className="register-form">
            <div id="firstNameContainer" className="login-input">
              {/* <label htmlFor="email">First Name</label> */}
              <input type="text" id="email" name="email" className="sign-form-input" placeholder="First Name" required />
            </div>
            <div id="lastNameContainer" className="login-input">
              {/* <label htmlFor="email">Last Name</label> */}
              <input type="text" id="email" name="email" className="sign-form-input" placeholder="Last Name" required />
            </div>
            <div id="emailContainer" className="login-input">
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" id="email" name="email" className="sign-form-input" placeholder="Email" required />
            </div>
            <div id="pswdContainer" className="login-input">
              {/* <label htmlFor="password">Password</label> */}
              <input type="password" id="password" className="sign-form-input" placeholder="Password" required/>
            </div>
            <div id="confPswdContainer" className="login-input">
              {/* <label htmlFor="password">Confirm Password</label> */}
              <input type="password" id="password" className="sign-form-input" placeholder="Confirm Password" required/>
            </div>

            <button className="login-button w3-button w3-pink" type="submit">Signup</button>
          </form>
        </div>

      </div>
    )
  }
}
export default Login;