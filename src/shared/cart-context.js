import React, { createContext } from 'react';

const CartContext = createContext({
    cart: [],
    updateCart: () => {},
});

export class CartProvider extends React.Component {
    updateCart = item => {
        this.setState({cart: [...this.state.cart, item]});
  };

  state = {
    cart: [],
    updateCart: this.updateCart,
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
