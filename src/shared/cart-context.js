import React, { createContext } from 'react';

export const CartContext = createContext({
    cart: [],
    updateCart: () => {},
    removeItem: () => {},
    addItem: () => {},
    netTotal: () => {},
    getGrossTotal: () => {}
});

export class CartProvider extends React.Component {
    updateCart = item => {
        this.setState({cart: [...this.state.cart, item]},
          this.getGrossTotal);
  }

  removeItem = (item) => {
    const products = this.state.cart;
  } 

  addItem = (item) => {
    const products = this.state.cart;
  } 

  netTotal = (item) => {
    const products = this.state.cart;
  }

  getGrossTotal = () => {
    return this.state.cart.reduce(function(total, num){ return total + num.price}, 0);
  }

  state = {
    cart: [],
    updateCart: this.updateCart,
    removeItem: this.removeItem,
    addItem: this.addItem,
    netTotal: this.netTotal,
    getGrossTotal: this.getGrossTotal
  };

  render() {
    return (
      <CartContext.Provider value={this.state}>
        {this.props.children}
      </CartContext.Provider>
    );
  }
}

export const CartConsumer = CartContext.Consumer;
