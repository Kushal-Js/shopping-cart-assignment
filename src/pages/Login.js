import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';


class Login extends Component {
  render() {
    return (
      <div class="loginContainer container row">
        <div class="loginTextContainer col-md-6">
          <h1>Login</h1>
          <span>Get access to your Orders, Wishlist and Recommendations</span>
        </div>
        <form method="post" action="/home" class="contact-form col-md-6">
          <div id="emailContainer" class="inputContainer">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="" required />
          </div>

          <div id="pswdContainer" class="inputContainer">
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="" required />
          </div>

          <button type="submit">Login</button>
        </form>
      </div>
    )
  }
}
export default Login;
