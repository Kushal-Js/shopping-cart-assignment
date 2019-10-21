import React, { Component } from 'react';
import './Menu.css';


class Menu extends Component {
    render() {
        return (
            <div id="sidebar">
                <ul className="">
                    <li>
                        <a href="#">Fruits and Vegetables</a>
                    </li>
                    <li>
                        <a href="#">Bakery cakes and Dairy</a>
                    </li>
                    <li>
                        <a href="#">Beverages</a>
                    </li>
                    <li>
                        <a href="#">Beauty and Hygiene</a>
                    </li>
                    <li>
                        <a href="#">Baby Care</a>
                    </li>
                </ul>
            </div>
        );
    }
}

class MobileMenu extends Component {
    render() {
        return (
            <div id="menu-mobile">
                <div className="">
                    <a href="#" className="">Fruits and Vegetables</a>
                    <i className="fa fa-angle-down icon" data-toggle="collapse" data-target="#navbarCollapse2"> </i>
                </div>

                <div className="collapse navbar-collapse" id="navbarCollapse2">
                    <div className="navbar-nav">
                        <a href="#">Bakery cakes and Dairy</a>
                        <a href="#">Beverages</a>
                        <a href="#">Baby Care</a>
                    </div>
                </div>
            </div>
        );
    }
}

export {
    Menu,
    MobileMenu
};