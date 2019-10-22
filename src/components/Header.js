import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                    <div className="header-brand">
                        <Link to="/home">
                            <img src="./static/images/logo.png" alt=""></img>
                        </Link>

                        <span className="header-links">
                            <Link to="/home">Home</Link>
                            <Link to="/products">Products</Link>
                        </span>
                    </div>

                    <div className="header-basket">
                        <span className="header-links">
                            <Link to="/login">SignIn</Link>
                            <Link to="/register">Register</Link>
                        </span>
                        <img src="./static/images/cart.svg" alt=""></img>
                        <span>0 items</span>
                    </div>
            </header>

        );
    }
}
export default Header;
