import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cart from '../components/Cart';
import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
      }
    

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
                        <img src="./static/images/cart.svg" alt="" data-toggle="modal" data-target="#myModal"></img>
                        <span>0 items</span>
                    </div>
                    <Cart/>
            </header>
        );
    }
}

export default Header;
