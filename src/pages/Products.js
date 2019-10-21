import React, { Component } from 'react';
import { Menu, MobileMenu } from '../components/Menu';
import List from '../components/List';
import './Products.css';

class Products extends Component {
  render() {
    return (
      <div className="wrapper">

        <MobileMenu />

        <Menu />

        <article className="content">
          <List />
        </article>

      </div>
    );
  }
}
export default Products;