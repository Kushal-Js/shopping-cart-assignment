import React, { Component } from 'react';
import { CartConsumer } from '../shared/cart-context';
import './List.css';

class List extends Component {
  constructor(props){
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
            <article key={item.id}>
              <img src={`.`+item.imageURL} alt=""></img>
              <div className="text">
                <h4>{item.name}</h4>
                <p className="item-text">{item.description}</p>
                <div>
                <span>MRP Rs.{item.price}</span>
                <CartConsumer>
                {({ updateCart }) => (
                <button onClick={() => updateCart(item)} className="w3-button w3-pink">Buy Now</button>
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

  addToCart(item){
    this.setState({addedToCart: [...this.state.addedToCart, item]});
  }
}

export default List;