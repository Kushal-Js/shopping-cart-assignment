import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  render() {
    return (
      <div className="login-container">
        <div className="login-info">
          <h1 className="login-text">Login</h1>
          <span>Get access to your Orders, Wishlist and Recommendations</span>
        </div>
        <form method="post" action="/home" className="login-form">
          <div id="emailContainer" className="login-input">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="" required />
          </div>
          <div id="pswdContainer" className="login-input">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" />
          </div>

          <button className="login-button" type="submit">Login</button>
        </form>
      </div>
    )
  }
}
export default Login;
