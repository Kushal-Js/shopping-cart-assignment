import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cart from '../components/Cart';
import { CartConsumer } from '../shared/cart-context';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header role="banner" className="app-header">
                <div role="main heading" className="header-brand">
                    <Link role="navigation" to="/home">
                        <img src="./static/images/logo.png" alt="Sabka Bazaar"></img>
                    </Link>

                    <span className="header-app-links" id="header-app-links">
                        <Link role="navigation" to="/home" className="header-links"><b>Home</b></Link>
                        <Link role="navigation" to="/products" className="header-links"><b>Products</b></Link>
                    </span>
                </div>

                <div role="main heading" className="header-basket">
                    <span className="header-basket-links">
                        <Link role="navigation" to="/login" className="reg-links">SignIn</Link>
                        <Link role="navigation" to="/register" className="reg-links">Register</Link>
                    </span>
                    <span className="cart">
                        <img src="./static/images/cart.svg" alt="Sabka Bazaar Cart" data-toggle="modal" data-target="#myModal"></img>
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
