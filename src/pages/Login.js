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
            <div className="login-container">

                <div className="login-info">
                    <h2>Login</h2>
                    <span>Get access to your Orders, Wishlist and Recommendations</span>
                </div>

                <div className="login-form-container">
                    <form action="/home" className="login-form">
                        <div id="emailContainer" className="login-input">
                            <TextField id="floating-center-title" label="Email" onChange={this.validateEmail} linedirection="center" className="md-cell md-cell--bottom" required />
                            {this.state.showEmailError ?
                                (<span className="login-error">{commom.errors.emailError}</span>) :
                                (<span></span>)}
                        </div>

                        <div id="pswdContainer" className="login-input">
                            <TextField id="floating-center-title" label="Password" onChange={this.validatePwd} linedirection="center" className="md-cell md-cell--bottom" required />
                            {this.state.showPwdError ?
                                (<span className="login-error">{commom.errors.pwdError}</span>) :
                                (<span></span>)}
                        </div>

                        <button disabled={!this.state.isValid} className="login-button w3-button w3-pink" type="submit">Login</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default Login;