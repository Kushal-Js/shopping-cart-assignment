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
      <div className="register">

        <div className="register__info">
          <span className="register__info-text"><h1>Signup</h1></span>
          <span>We don not share your personal details with anyone.</span>
        </div>

          <form action="/home" method="post" className="register__register-form">
            <div id="firstNameContainer">
              <TextField id="firstNameInput" name="firstName" label="First Name" linedirection="center" className="md-cell md-cell--bottom register-form__register-input" required />
            </div>
            <div id="lastNameContainer">
              <TextField id="lastNameInput" name="lastName" label="Last Name" linedirection="center" className="md-cell md-cell--bottom register-form__register-input" required />
            </div>
            <div id="emailContainer">
              <TextField id="emailInput" name="email" label="Email" onChange={this.validateEmail} linedirection="center" className="md-cell md-cell--bottom register-form__register-input" required />
            </div>
            <div aria-describedby="info" aria-live="assertive" aria-relevant="additions removals">
              {this.state.showEmailError ?
                (<span id="info" className="register-form__register-error">{commom.errors.emailError}</span>) :
                (<span></span>)}
            </div>

            <div id="passwordContainer">
              <TextField id="passwordInput" name="password" label="Password" type="password" onChange={this.validatePwd} linedirection="center" className="md-cell md-cell--bottom register-form__register-input" required />
            </div>
            <div aria-describedby="info" aria-live="assertive" aria-relevant="additions removals">
              {this.state.showPwdError ?
                (<span id="info" className="register-form__register-error">{commom.errors.pwdError}</span>) :
                (<span></span>)}
            </div>

            <div id="confirmPasswordContainer">
              <TextField id="confirmPasswordInput" name="confirmPassword" label="Confirm Password" type="password" onChange={this.validateCnfPwd} linedirection="center" className="md-cell md-cell--bottom register-form__register-input" required />
            </div>
            <div aria-describedby="info" aria-live="assertive" aria-relevant="additions removals">
              {this.state.showCnfPwdError ?
                (<span id="info" className="register-form__register-error">{commom.errors.cnfPwdError}</span>) :
                (<span></span>)}
            </div>

            <button id="signUpButton" name="signUp" disabled={!this.state.isValid} className="register-form__register-button w3-button w3-pink" type="submit">Signup</button>
          </form>

      </div>
    )
  }
}
export default Login;