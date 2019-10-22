import React, { Component } from 'react';
import { Link } from "react-router-dom"
import './Menu.css';


class Menu extends Component {
    render() {
        return (
            <aside className="main-nav" id="main-nav">

                <span><Link href="#">Fruits and Vegetables</Link></span>
                <span><Link href="#">Bakery cakes and Dairy</Link></span>
                <span><Link href="#">Beverages</Link></span>
                <span><Link href="#">Beauty and Hygiene</Link></span>
                <span><Link href="#">Baby Care</Link></span>

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
                        <Link href="#" className="items">Fruits and Vegetables</Link>
                        <i className="fa fa-angle-down icon" data-toggle="collapse" data-target="#navbarCollapse"> </i>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <Link href="#">Bakery cakes and Dairy</Link>
                            <Link href="#">Beverages</Link>
                            <Link href="#">Baby Care</Link>
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