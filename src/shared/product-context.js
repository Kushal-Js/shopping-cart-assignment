import React, { createContext } from 'react';

export const ProductContext = createContext({
    products: [],
    getProducts: () => {},
});

export class ProductProvider extends React.Component {
    getProducts = products => {
        this.setState({products: [...this.state.products, products]});
  };

  state = {
    products: [],
    getProducts: this.getProducts,
  };

  render() {
    return (
      <ProductContext.Provider value={this.state}>
        {this.props.children}
      </ProductContext.Provider>
    );
  }
}

export const ProductConsumer = ProductContext.Consumer;