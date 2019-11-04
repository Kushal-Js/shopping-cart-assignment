import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import './LoginTest.css';


class LoginTest extends Component {
    render() {
        return (
            <div role="login container" className="login-container">

                <div role="login text" className="login-info">
                    <h1>Login</h1>
                    <span>Get access to your Orders, Wishlist and Recommendations</span>
                </div>

                <div className="login-form-container">
                    <form method="post" action="/home" className="login-form">
                        <div id="emailContainer" className="login-input">
                            <TextField id="floating-center-title" label="Email" lineDirection="center" className="md-cell md-cell--bottom" />
                        </div>
                        <div id="pswdContainer" className="login-input">
                            <TextField id="floating-center-title" label="Password" lineDirection="center" className="md-cell md-cell--bottom" />
                        </div>

                        <button role="submit login details" className="login-button w3-button w3-pink" type="submit">Login</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default LoginTest;