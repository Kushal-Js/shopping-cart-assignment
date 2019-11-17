import React, { Component } from 'react';
import { CartConsumer } from '../shared/cart-context';
import commom from '../shared/common';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: []
    }
    this.addToCart = this.addToCart.bind(this);
  }

  render() {
    const products = this.props.products;

    return (

      <main className="list">
        {products.map((item) => {
          return (
            <article key={item.id} className="product-item">
              
              <div className="text">
                <h4 className="item-name">{item.name}</h4>
                <img src={`.` + item.imageURL} alt=""></img>
                <span className="item-text-block"><p className="item-text">{item.description}</p></span>
                <div className="buy-area">
                  <span>MRP Rs.{item.price}</span>
                  <CartConsumer>
                    {({ updateCart }) => (
                      <button onClick={() => updateCart(item)} className="w3-button w3-pink">{commom.labels.buyNow}</button>
                    )}
                  </CartConsumer>
                </div>
              </div>
            </article>
          )
        })}
      </main>
    );
  }

  addToCart(item) {
    this.setState({ addedToCart: [...this.state.addedToCart, item] });
  }
}

export default List;