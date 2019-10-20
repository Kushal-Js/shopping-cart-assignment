import React, { Component } from 'react';
import { Menu, MobileMenu } from '../components/Menu';
import List from '../components/List';

class Home extends Component {
  render() {
    return (
      <div className="container">
      <MobileMenu/>
      <div className="wrapper">
        <Menu/>
        <div id="content" className="container-fluid">
          <List />
        </div>
      </div>
      </div>
    );
  }
}
export default Home;