import React, { createContext } from 'react';

export const CategoryContext = createContext({
    categories: [],
    setCategory: () => {},
});

export class CategoryProvider extends React.Component {
  setCategory = category => {
        this.setState({categories: [...this.state.categories, category]});
  };

  state = {
    categories: [],
    setCategory: this.setCategory,
  };

  render() {
    return (
      <CategoryContext.Provider value={this.state}>
        {this.props.children}
      </CategoryContext.Provider>
    );
  }
}

export const CategoryConsumer = CategoryContext.Consumer;