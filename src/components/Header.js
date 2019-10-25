import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cart from '../components/Cart';
import { CartConsumer } from '../shared/cart-context';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header className="app-header">
                <div className="header-brand">
                    <Link to="/home">
                        <img src="./static/images/logo.png" alt=""></img>
                    </Link>

                    <span className="header-app-links">
                        <Link to="/home" className="header-links"><b>Home</b></Link>
                        <Link to="/products" className="header-links"><b>Products</b></Link>
                    </span>
                </div>

                <div className="header-basket">
                    <span className="header-basket-links">
                        <Link to="/login">SignIn</Link>
                        <Link to="/register">Register</Link>
                    </span>
                    <span className="cart">
                        <img src="./static/images/cart.svg" alt="" data-toggle="modal" data-target="#myModal"></img>
                        <CartConsumer>
                            {({ cart }) => (
                                <span>{cart.length + ` items`}</span>
                            )}
                        </CartConsumer>
                    </span>
                </div>
                <Cart />
            </header>
        );
    }
}

export default Header;
