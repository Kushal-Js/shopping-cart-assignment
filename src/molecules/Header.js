import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cart from '../molecules/Cart';
import { CartConsumer } from '../shared/cart-context';
import './Header.css';

class Header extends Component {

    render() {
        return (
            <header role="banner" className="app-header">
                <div className="header-brand">
                    <Link role="navigation" to="/home">
                        <img src="./static/images/logo.png" alt="Sabka Bazaar"></img>
                    </Link>

                    <div className="header-app-links">
                        <Link role="navigation" to="/home" className="header-links"><b>Home</b></Link>
                        <Link role="navigation" to="/products" className="header-links"><b>Products</b></Link>
                    </div>
                </div>

                <div className="header-basket">
                    <div className="header-basket-links">
                        <Link role="navigation" to="/login" className="reg-links">SignIn</Link>
                        <Link role="navigation" to="/register" className="reg-links">Register</Link>
                    </div>
                    <button className="cart">
                        <img src="./static/images/cart.svg" alt="Sabka Bazaar Cart" data-toggle="modal" data-target="#myModal"></img>
                        <CartConsumer>
                            {({ cart }) => (
                                <span>{cart.length + ` items`}</span>
                            )}
                        </CartConsumer>
                    </button>
                </div>
                <Cart />
            </header>
        );
    }
}

export default Header;
