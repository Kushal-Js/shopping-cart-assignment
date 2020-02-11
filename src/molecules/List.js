import React, { Component } from 'react';
import { CartConsumer } from '../shared/cart-context';
import commom from '../shared/common';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      cart: [],
      width: 0,
      height: 0
    }
    this.addToCart = this.addToCart.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    const products = this.props.products;

    return (
      <main className="product-list__list">
        {products.map((item) => {
          return (
            (this.state.width > 600) ?
              ((this.state.width < 800) ?
                (
                  <article key={item.id} className="product-list__product-item-tab">
                    <h4 className="product-item__item-name">{item.name}</h4>

                    <div className="product-item__wrapper-tab">
                      <img src={`.` + item.imageURL} alt=""></img>
                      <p className="product-item__item-text-block-tab">{item.description}</p>
                    </div>


                    <div className="product-item__buy-tab">
                      <CartConsumer>
                        {({ updateCart }) => (
                          <button onClick={() => updateCart(item)} className="w3-button w3-pink" aria-label={commom.labels.buyNow + item.name}>
                            {commom.labels.buyNow} @ Rs.{item.price}</button>
                        )}
                      </CartConsumer>

                    </div>
                  </article>
                ) : (
                  <article key={item.id} className="product-list__product-item">
                    <div className="product-item__wrapper">
                      <h4 className="product-item__item-name">{item.name}</h4>
                      <img src={`.` + item.imageURL} alt=""></img>
                      <p className="product-item__item-text-block">{item.description}</p>
                      <div className="product-item__buy">
                        <span>MRP Rs.{item.price}</span>
                        <CartConsumer>
                          {({ updateCart }) => (
                            <button onClick={() => updateCart(item)} className="w3-button w3-pink" aria-label={commom.labels.buyNow + item.name}>
                              {commom.labels.buyNow}</button>
                          )}
                        </CartConsumer>
                      </div>
                    </div>
                  </article>
                )
              ) : (
                <article key={item.id} className="product-list__product-item-mob">
                  <h4 className="product-item__item-name">{item.name}</h4>
                  <div className="product-item__wrapper-mob">

                    <img src={`.` + item.imageURL} alt=""></img>

                    <div>
                      <p className="product-item__item-text-block">{item.description}</p>
                      <div className="product-item__buy-mob">
                        <CartConsumer>
                          {({ updateCart }) => (
                            <button onClick={() => updateCart(item)} className="w3-button w3-pink" aria-label={commom.labels.buyNow + item.name}>
                              {commom.labels.buyNow} @ Rs.{item.price}</button>
                          )}
                        </CartConsumer>
                      </div>
                    </div>
                  </div>
                </article>
              )
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