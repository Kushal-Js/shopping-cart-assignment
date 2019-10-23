import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import './Menu.css';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        axios.get('http://localhost:8080/api/categories')
            .then((res) => {
                this.setState({ categories: res.data })
            })
    }

    render() {
        const { categories } = this.state;

        return (
            <aside className="main-nav" id="main-nav">
                {categories.map((item) => {
                    return (
                        <span key={item.key}>
                            <Link to="/products" onClick= {() => this.props.simplifiedFunction(item.id)}>{item.name}</Link>
                            </span>
                    )
                })}
            </aside>
        );
    }
}

class MobileMenu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        this.getList();
    }

    getList = () => {
        axios.get('http://localhost:8080/api/categories')
            .then((res) => {
                this.setState({ categories: res.data })
            })
    }

    render() {
        const { categories } = this.state;

        return (
            <header className="main-head" id="main-head">
                <div id="menu-mobile">
                    <div className="menu-mobile-brand">
                        <Link to="/products" className="items"  onClick= {() => this.props.simplifiedFunction()}>Fruits and Vegetables</Link>
                        <i className="fa fa-angle-down icon" data-toggle="collapse" data-target="#navbarCollapse"> </i>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            {categories.map((item) => {
                                return (
                                    <span key={item.key}>
                                        <Link to="/products" onClick= {() => this.props.simplifiedFunction(item.id)}>{item.name}</Link>
                                        </span>
                                )
                            })}
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