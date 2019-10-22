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
              <img src={`.`+item.imageURL} alt=""></img>
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <div>
                <span>MRP Rs.{item.price}</span>
                <button>Buy Now</button>
                </div>
              </div>
            </article>
          )
        })}
      </main>
    );
  }
}

export default List;