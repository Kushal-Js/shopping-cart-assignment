import React, { Component } from 'react';
import { Menu, MobileMenu } from '../components/Menu';
import List from '../components/List';
import './Home.css';

class Home extends Component {
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
export default Home;