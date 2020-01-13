import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import commom from '../shared/common';
import './Register.css';

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      pwd: '',
      cnfPwd: '',
      isValid: true,
      showPwdError: false,
      showCnfPwdError: false,
      showEmailError: false
    }
    this.validateEmail = this.validateEmail.bind(this);
    this.validatePwd = this.validatePwd.bind(this);
    this.validateCnfPwd = this.validateCnfPwd.bind(this);
  }

  validateEmail(event) {
    event.preventDefault();
    this.setState({ email: event.target.value });
    const email = event.target.value;
    const re = /[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}/igm;

    const emailCorrect = re.test(email);
    if (emailCorrect) {
      this.setState(
        {
          showEmailError: false,
          isValid: true
        });
    } else {
      this.setState(
        {
          showEmailError: true,
          isValid: false
        });
    }
  }

  validatePwd(event) {
    event.preventDefault();
    this.setState({ pwd: event.target.value });
    const pwd = event.target.value;
    const re = new RegExp("^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$");
    const pwdCorrect = re.test(pwd);
    if (pwdCorrect) {
      this.setState(
        {
          showPwdError: false,
          isValid: true
        });
    } else {
      this.setState(
        {
          showPwdError: true,
          isValid: false
        });
    }
  }

  validateCnfPwd(event) {
    event.preventDefault();
    this.setState({ cnfPwd: event.target.value });
    const cnfPwd = event.target.value;
    const cnfPwdCorrect = this.state.pwd === cnfPwd ? true : false;
    if (cnfPwdCorrect) {
      this.setState(
        {
          showCnfPwdError: false,
          isValid: true
        });
    } else {
      this.setState(
        {
          showCnfPwdError: true,
          isValid: false
        });
    }
  }

  render() {
    return (
      <div className="login-container">

        <div className="login-info">
          <span className="login-text"><h2>Signup</h2></span>
          <span>We don not share your personal details with anyone.</span>
        </div>

        <div className="login-form-container">
          <form action="/home" className="register-form">
            <div id="firstNameContainer" className="login-input">
              <TextField id="floating-center-title" label="First Name" linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div id="lastNameContainer" className="login-input">
              <TextField id="floating-center-title" label="Last Name" linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div id="emailContainer" className="login-input">
              <TextField id="floating-center-title" label="Email" onChange={this.validateEmail} linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div className="login-input" aria-describedby="info">
              {this.state.showEmailError ?
                (<span id="info" className="register-error">{commom.errors.emailError}</span>) :
                (<span></span>)}
            </div>

            <div id="pswdContainer" className="login-input">
              <TextField id="floating-center-title" label="Password" type="password" onChange={this.validatePwd} linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div aria-describedby="info" className="login-input">
              {this.state.showPwdError ?
                (<p id="info" className="register-error">{commom.errors.pwdError}<br />{commom.errors.pwdError2}</p>) :
                (<span></span>)}
            </div>

            <div id="confPswdContainer" className="login-input">
              <TextField id="floating-center-title" label="Confirm Password" type="password" onChange={this.validateCnfPwd} linedirection="center" className="md-cell md-cell--bottom" required />
            </div>
            <div aria-describedby="info" className="login-input">
              {this.state.showCnfPwdError ?
                (<p id="info" className="register-error">{commom.errors.cnfPwdError}<br />{commom.errors.cnfPwdError2}</p>) :
                (<span></span>)}
            </div>

            <button disabled={!this.state.isValid} className="login-button w3-button w3-pink" type="submit">Signup</button>
          </form>
        </div>

      </div>
    )
  }
}
export default Login;