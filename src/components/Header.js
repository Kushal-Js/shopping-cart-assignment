import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                    <div className="header-brand">
                        <a href="/home">
                            <img src="./static/images/logo.png" alt=""></img>
                        </a>

                        <span className="header-links">
                            <a href="/home">Home</a>
                            <a href="/products">Products</a>
                        </span>
                    </div>

                    <div className="header-basket">
                        <span className="header-links">
                            <a href="/login">SignIn</a>
                            <a href="/register">Register</a>
                        </span>
                        <img src="./static/images/cart.svg" alt=""></img>
                        <span>0 items</span>
                    </div>
            </header>

        );
    }
}
export default Header;
