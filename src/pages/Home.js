import React, { Component } from 'react';
import { Menu, MobileMenu } from '../components/Menu';
import List from '../components/List';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div class="wrapper">

        <header class="main-head" id="main-head">
          <div id="menu-mobile">
            <div className="">
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

        <aside class="main-nav" id="main-nav">

          <span><a href="#">Fruits and Vegetables</a></span>
          <span><a href="#">Bakery cakes and Dairy</a></span>
          <span><a href="#">Beverages</a></span>
          <span><a href="#">Beauty and Hygiene</a></span>
          <span><a href="#">Baby Care</a></span>

        </aside>

        <article class="content">
          <List />
        </article>

      </div>
    );
  }
}
export default Home;