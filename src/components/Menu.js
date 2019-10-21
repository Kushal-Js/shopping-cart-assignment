import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component {
    render() {
        return (
            <aside className="main-nav" id="main-nav">

                <span><a href="#">Fruits and Vegetables</a></span>
                <span><a href="#">Bakery cakes and Dairy</a></span>
                <span><a href="#">Beverages</a></span>
                <span><a href="#">Beauty and Hygiene</a></span>
                <span><a href="#">Baby Care</a></span>

            </aside>
        );
    }
}

class MobileMenu extends Component {
    render() {
        return (
            <header className="main-head" id="main-head">
                <div id="menu-mobile">
                    <div className="menu-mobile-brand">
                        <a href="#" className="items">Fruits and Vegetables</a>
                        <i className="fa fa-angle-down icon" data-toggle="collapse" data-target="#navbarCollapse"> </i>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#">Bakery cakes and Dairy</a>
                            <a href="#">Beverages</a>
                            <a href="#">Baby Care</a>
                        </div>
                    </div>
                </div>
            </header>
        );
    }
}

export {
    Menu,
    MobileMenu
};