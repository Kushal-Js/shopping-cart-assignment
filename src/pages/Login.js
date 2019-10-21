import React, { Component } from 'react';
import './Login.css';


class Login extends Component {
  render() {
    return (
      <div className="loginContainer container row">
        <div className="loginTextContainer col-md-6">
          <h1>Login</h1>
          <span>Get access to your Orders, Wishlist and Recommendations</span>
        </div>
        <form method="post" action="/home" className="contact-form col-md-6">
          <div id="emailContainer" className="inputContainer">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="" required />
          </div>

          <div id="pswdContainer" className="inputContainer">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" placeholder="" required />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
export default Login;
