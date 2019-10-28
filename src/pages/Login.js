import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  render() {
    return (
      <div className="login-container">

        <div className="login-info">
          <h1>Login</h1>
          <span>Get access to your Orders, Wishlist and Recommendations</span>
        </div>

        <div className="login-form-container">
          <form method="post" action="/home" className="login-form">
            <div id="emailContainer" className="login-input">
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" id="email" name="email" className="sign-form-input" placeholder="Email" required />
            </div>
            <div id="pswdContainer" className="login-input">
              {/* <label htmlFor="password">Password</label> */}
              <input type="password" id="password" name="password" className="sign-form-input" placeholder="Password" required/>
            </div>

            <button className="login-button w3-button w3-pink" type="submit">Login</button>
          </form>
        </div>

      </div>
    )
  }
}
export default Login;
