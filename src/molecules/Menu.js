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
            this.setState({ categories: categories });
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
            <aside className="app__main-nav">
                <ul>
                {categories.map((item, index) => {
                    return (
                        <li key={index}>
                            <Link to="/products" role="navigation" title={item.name} className="app_main-nav-links" onClick={() => this.props.simplifiedFunction(item.id)}>{item.name}</Link>
                        </li>
                    )
                })}
                </ul>
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
            this.setState({ categories: categories });
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
        const firstCat = categories.length > 0 ? categories[0] : {};
        const slicedCats = categories.slice(1, categories.length);

        return (
            <header role="complementary" className="app__main-head">
                <div id="app__menu-mobile">
                    <div className="app__menu-mobile-brand">
                        <Link to="/products" role="navigation" className="items" title={firstCat} onClick={() => this.props.simplifiedFunction(firstCat.id)}>{firstCat.name}</Link>
                        <i className="fa fa-angle-down icon" data-toggle="collapse" data-target="#navbarCollapse"> </i>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <ul className="navbar-nav">
                            {slicedCats.map((item) => {
                                return (
                                    <li key={item.key}>
                                        <Link to="/products" role="navigation" title={item.name} className="app__main-nav-links" onClick={() => this.props.simplifiedFunction(item.id)}>
                                            {item.name}</Link>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    {/* <select>
                    <option value="Orange">Orange</option>
                    <option value="Radish">Radish</option>
                    <option value="Cherry">Cherry</option>
                    </select> */}
                </div>
            </header>
        );
    }
}

export {
    Menu,
    MobileMenu
};