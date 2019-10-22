import React, { Component } from 'react';
import './List.css';

class List extends Component {

  render() {
    const products = this.props.products;

    return (
      <main className="list">
        {products.map((item) => {
          return (
            <article key={item.key}>
              <img src={`.`+item.imageUrl} alt=""></img>
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button>Here's why</button>
              </div>
            </article>
          )
        })}
      </main>
    );
  }
}

export default List;