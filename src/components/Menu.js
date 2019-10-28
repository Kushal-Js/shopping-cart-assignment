import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { CategoryContext } from '../shared/category-context';
import './Menu.css';

class Menu extends Component {
    static contextType = CategoryContext;

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const user = this.context;
        const categories = user.categories;
        if (user.categories.length === 0) {
            this.getList();
        } else {
            this.setState({ categories:  categories});
        }
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
                            <Link to="/products" className="main-nav-links" onClick= {() => this.props.simplifiedFunction(item.id)}>{item.name}</Link>
                            </span>
                    )
                })}
            </aside>
        );
    }
}

class MobileMenu extends Component {
    static contextType = CategoryContext;

    constructor(props) {
        super(props);
        this.state = {
            categories: []
        }
    }

    componentDidMount() {
        const user = this.context;
        const categories = user.categories;
        if (user.categories.length === 0) {
            this.getList();
        } else {
            this.setState({ categories:  categories});
        }
    }

    getList = () => {
        axios.get('http://localhost:8080/api/categories')
            .then((res) => {
                this.setState({ categories: res.data })
            })
    }

    render() {
        const { categories } = this.state;
        const firstCat = categories.length > 0 ? categories[0].name : '';
        const slicedCats = categories.slice(1, categories.length);

        return (
            <header className="main-head" id="main-head">
                <div id="menu-mobile">
                    <div className="menu-mobile-brand">
                        <Link to="/products" className="items"  onClick= {() => this.props.simplifiedFunction()}>{firstCat}</Link>
                        <i className="fa fa-angle-down icon" data-toggle="collapse" data-target="#navbarCollapse"> </i>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            {slicedCats.map((item) => {
                                return (
                                    <span key={item.key}>
                                        <Link to="/products" className="main-nav-links" onClick= {() => this.props.simplifiedFunction(item.id)}>
                                        {item.name}</Link>
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