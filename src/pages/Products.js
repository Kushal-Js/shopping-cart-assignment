import React, { Component } from 'react';
import axios from 'axios';
import { Menu, MobileMenu } from '../components/Menu';
import List from '../components/List';
import './Products.css';

class Products extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: []
    }
  }
  
  componentDidMount() {
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

  render() {
    const { products } = this.state;

    return (
      <div className="wrapper">

        <MobileMenu simplifiedFunction = {this.simplifiedFunction} />

        <Menu simplifiedFunction = {this.simplifiedFunction} />

        <div role="main" className="content">
          <List products={products}/>
        </div>

      </div>
    );
  }
}
export default Products;