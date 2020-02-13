import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Cart from '../molecules/Cart';
import { CartConsumer } from '../shared/cart-context';
import './Header.css';

class Header extends Component {

    openCart() {
        var y = document.getElementById("overlayCart");
        var domBody = document.getElementsByTagName("body");

        if (y.style.display === "" || y.style.display === "none") {
            y.style.display = "block";
            domBody[0].style.overflow = "hidden";
            domBody[0].style.position = "fixed";
            return;
        } 
        if (y.style.display === "block") {
            y.style.display = "none";
            domBody[0].style.overflow = "auto";
            domBody[0].style.position = "absolute";
          } 
      } 

      cancelCart() {
        var y = document.getElementById("overlayCart");
        var domBody = document.getElementsByTagName("body");

        if (y.style.display === "block") {
            y.style.display = "none";
            domBody[0].style.overflow = "";
            domBody[0].style.position = "";
          } 
      }

    render() {
        return (
            <header role="banner" className="app-header">
                <div className="app-header__header-brand">
                    <Link role="navigation" to="/home">
                        <img srcSet="./static/images/logo_2x.png, ./static/images/logo.png" alt="Sabka Bazaar"></img>
                    </Link>

                    <nav className="app-header__header-app-links">
                        <Link role="navigation" to="/home" onClick={this.cancelCart.bind(this)} className="app-header__header-links">Home</Link>
                        <Link role="navigation" to="/products" onClick={this.cancelCart.bind(this)} className="app-header__header-links">Products</Link>
                    </nav>
                </div>

                <div className="app-header__header-basket">
                    <nav className="app-header__header-basket-links">
                        <Link role="navigation" to="/login" onClick={this.cancelCart.bind(this)} className="app-header__reg-links">SignIn</Link>
                        <Link role="navigation" to="/register" className="app-header__reg-links">Register</Link>
                    </nav>
                    <button className="app-header__cart" onClick={this.cancelCart.bind(this)} onClick={this.openCart.bind(this)}>
                        <img src="./static/images/cart.svg" alt="Sabka Bazaar Cart"></img>
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
