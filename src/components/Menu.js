import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Menu.css';


class Menu extends Component {
    render() {
        return (
            <aside className="main-nav" id="main-nav">

                <span><Link to="#">Fruits and Vegetables</Link></span>
                <span><Link to="#">Bakery cakes and Dairy</Link></span>
                <span><Link to="#">Beverages</Link></span>
                <span><Link to="#">Beauty and Hygiene</Link></span>
                <span><Link to="#">Baby Care</Link></span>

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
                        <Link to="#" className="items">Fruits and Vegetables</Link>
                        <i className="fa fa-angle-down icon" data-toggle="collapse" data-target="#navbarCollapse"> </i>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link to="#">Bakery cakes and Dairy</Link>
                            <Link to="#">Beverages</Link>
                            <Link to="#">Baby Care</Link>
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