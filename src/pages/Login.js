import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
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
                            <TextField id="floating-center-title" label="Email" linedirection="center" className="md-cell md-cell--bottom" required/>
                        </div>
                        <div id="pswdContainer" className="login-input">
                            <TextField id="floating-center-title" label="Password" linedirection="center" className="md-cell md-cell--bottom" required/>
                        </div>

                        <button className="login-button w3-button w3-pink" type="submit">Login</button>
                    </form>
                </div>

            </div>
        )
    }
}
export default Login;