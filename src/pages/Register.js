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
          <form method="post" action="/home" className="login-form">
            <div id="emailContainer" className="login-input">
              {/* <label htmlFor="email">First Name</label> */}
              <input type="email" id="email" name="email" placeholder="" required />
            </div>
            <div id="emailContainer" className="login-input">
              {/* <label htmlFor="email">Last Name</label> */}
              <input type="email" id="email" name="email" placeholder="" required />
            </div>
            <div id="emailContainer" className="login-input">
              {/* <label htmlFor="email">Email</label> */}
              <input type="email" id="email" name="email" placeholder="" required />
            </div>
            <div id="pswdContainer" className="login-input">
              {/* <label htmlFor="password">Password</label> */}
              <input type="password" id="password" placeholder="" />
            </div>
            <div id="pswdContainer" className="login-input">
              {/* <label htmlFor="password">Confirm Password</label> */}
              <input type="password" id="password" placeholder="" />
            </div>

            <button className="login-button" type="submit">Signup</button>
          </form>
        </div>

      </div>
    )
  }
}
export default Login;