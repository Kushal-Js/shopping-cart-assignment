import React, { Component } from 'react';
import { Menu, MobileMenu } from '../components/Menu';
import List from '../components/List';
import './Products.css';

class Products extends Component {

  constructor(props) {
    super(props)
    this.state = {
      products: [],
      catId : this.props.match.params.id
    }
  }
  
  componentDidMount() {
    this.getList();
  }
  
  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:8080/api/products')
      .then(res => res.json())
      .then((res) => {
        this.setState({ products: res })
      })
  }

  render() {
    const { products } = this.state;

    return (
      <div className="wrapper">

        <MobileMenu />

        <Menu />

        <article className="content">
          <List products={products}/>
        </article>

      </div>
    );
  }
}
export default Products;