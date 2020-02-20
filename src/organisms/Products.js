import React, { Component } from 'react';
import axios from 'axios';
import { Menu, MobileMenu } from '../molecules/Menu';
import List from '../molecules/List';
import './Products.css';

class Products extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      width: 0,
      height: 0
    }
  }
  
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
    this.getList();
  }
  
  getList = () => {
    const catId = this.props.location.state;
    axios.get('http://localhost:8080/api/products', {params:catId})
      .then((res) => {
        this.setState({ products: res.data })
      })
  }

  simplifiedFunction = (catId) => {
    axios.get('http://localhost:8080/api/products', {params:{catId}})
      .then((res) => this.setState({ products: res.data }))
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
}

  render() {
    const { products } = this.state;

    return (
      (this.state.width < 601) ?
        (
          <div className="wrapper">
            <MobileMenu simplifiedFunction={(catId) => this.simplifiedFunction(catId)} />
            <main role="main" className="content">
              <List products={products} />
            </main>
          </div>
        ) : (
          <div className="wrapper">
            <Menu simplifiedFunction={(catId) => this.simplifiedFunction(catId)} />
            <main role="main" className="content">
              <List products={products} />
            </main>
          </div>
        )
    );
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
}

}
export default Products;