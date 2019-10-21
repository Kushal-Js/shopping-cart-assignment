import React, { Component } from 'react';
import { Menu, MobileMenu } from '../components/Menu';
import List from '../components/List';

class Home extends Component {
  render() {
    return (
      <div className="home">
        <div>
        <MobileMenu />
        </div>
        <div className="home-page">
          <Menu />
          <div id="content" className="home-content">
            <List />
          </div>
        </div>
      </div>
    );
  }
}
export default Home;