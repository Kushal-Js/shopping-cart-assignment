import React, { createContext } from 'react';

export const CartContext = createContext({
  cart: [],
  updateCart: () => { },
  removeItem: () => { },
  addItem: () => { },
  getGrossTotal: () => { }
});

export class CartProvider extends React.Component {
  getTotal = (count, item) => {
    return count * item.price;
  }

  updateCart = (item) => {
    const temp = [...this.state.cart];
    let match = false;

    if (temp.length > 0) {
      temp.forEach((value, index) => {

        // console.log('boom', value.id, item.id);
        if (value.id == item.id) {
          // console.log('boom', value.id, item.id);

          let updatedCount = ++temp[index].count;
          temp[index].count = updatedCount;
          temp[index].total = this.getTotal(updatedCount, item);

          // console.log('issue', temp);
          match = true;
          this.setState({ cart: temp });

        } })
        if (!match) {

          let newEntry = {
            id: item.id,
            value: item,
            count: 1,
            total: this.getTotal(1, item)
          }
          // console.log('suspect 1', newEntry, item.id);
          this.setState({ cart: [...this.state.cart, ...[newEntry]] });
        }
      
    } else {

      let newEntry = {
        id: item.id,
        value: item,
        count: 1,
        total: this.getTotal(1, item)
      }

      // console.log('suspect 2', newEntry, item.id);
      this.setState({ cart: [...this.state.cart, ...[newEntry]] });

    }
  }

  removeItem = (item) => {

    const temp = [...this.state.cart];
    if (temp.length > 0) {
      temp.forEach((value, index) => {
        if (value.id === item.id) {
          if (temp[index].count > 0) {
          let updatedCount = --temp[index].count;
          
          temp[index].count = updatedCount;
          temp[index].total = this.getTotal(updatedCount, value.value);
          this.setState({ cart: [...temp] });
          }
        }
      })
    }
  }

  addItem = (item) => {

    const temp = [...this.state.cart];
    if (temp.length > 0) {

      temp.forEach((value, index) => {
        if (value.id === item.id) {
          let updatedCount = ++temp[index].count;
          temp[index].count = updatedCount;
          temp[index].total = this.getTotal(updatedCount, value.value);
          this.setState({ cart: [...temp] });

        }
      })
    }
  }

  getGrossTotal = () => {
    return this.state.cart.reduce(function (total, item) { return total + item.total }, 0);
  }

  state = {
    cart: [],
    updateCart: this.updateCart,
    removeItem: this.removeItem,
    addItem: this.addItem,
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
