import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import commom from '../shared/common';
import './Login.css';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            pwd: '',
            isValid: true,
            showPwdError: false,
            showEmailError: false
        }
        this.validateEmail = this.validateEmail.bind(this);
        this.validatePwd = this.validatePwd.bind(this);
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

    render() {
        return (
            <div className="login">

                <div className="login__info">
                    <h1>Login</h1>
                    <span>Get access to your Orders, Wishlist and Recommendations</span>
                </div>

                <form action="/home" method="post" className="login__login-form">
                    <div id="emailContainer">
                        <TextField id="emailInput" name="email" label="Email" onBlur={this.validateEmail} linedirection="center" className="md-cell md-cell--bottom login-form__login-input" required />
                    </div>
                    <div className="login-form__login-input" aria-describedby="info"  aria-live="assertive" aria-relevant="additions removals">
                        {this.state.showEmailError ?
                            (<span id="info" className="login-form__login-error">
                                {commom.errors.emailError}</span>) :
                            (<span></span>)}
                    </div>

                    <div id="passwordContainer">
                        <TextField id="passwordInput" name="password" type="password" label="Password" onBlur={this.validatePwd} linedirection="center" className="md-cell md-cell--bottom login-form__login-input" required />
                    </div>
                    <div className="login-form__login-input" aria-describedby="info"  aria-live="assertive" aria-relevant="additions removals">
                        {this.state.showPwdError ?
                            (<span id="info" className="login-form__login-error">
                                {commom.errors.pwdError}</span>) :
                            (<span></span>)}
                    </div>

                    <div>
                        <button id="loginButton" name="submit" disabled={!this.state.isValid} className="login-form__login-button w3-button w3-pink" type="submit">Login</button>
                    </div>
                </form>

                <div></div>
            </div>
        )
    }
}
export default Login;