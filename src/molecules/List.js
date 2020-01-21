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

      <main className="product-list__list">
        {products.map((item) => {
          return (
            <article key={item.id} className="product-list__product-item">
              <div className="product-item__wrapper">
                <h4 className="product-item__item-name">{item.name}</h4>
                <img src={`.` + item.imageURL} alt=""></img>
                <p className="product-item__item-text-block">{item.description}</p>
                <div className="product-item__buy">
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