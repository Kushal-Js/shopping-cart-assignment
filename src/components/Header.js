import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <header className="app-header">
                    <div className="header-brand">
                        <a href="#">
                            <img src="http://placehold.it/150x50?text=Logo" alt=""></img>
                        </a>

                        <span className="header-links">
                            <a href="/home">Home</a>
                            <a href="/products">Products</a>
                        </span>
                    </div>

                    <div className="header-basket">
                        <span className="header-links">
                            <a href="#">SignIn</a>
                            <a href="#">Register</a>
                        </span>
                        <img className="" src="http://placehold.it/150x50?text=Logo" alt="">
                        </img>
                    </div>
            </header>

        );
    }
}
export default Header;
