import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import { Link } from "react-router-dom";
import ControlledCarousel from '../molecules/Corousel';
import { CategoryContext } from '../shared/category-context';
import './Home.css';

class Home extends Component {
  static contextType = CategoryContext;

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
    // this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    const user = this.context;
    const categories = user.categories;
    if (user.categories.length === 0) {
      this.getList();
    } else {
      this.setState({ categories: categories });
    }
    window.addEventListener("resize", this.refetchPageData);
  }

  getList = () => {
    const user = this.context;
    axios.get('http://localhost:8080/api/categories')
      .then((res) => {
        user.setCategory(res.data);
        this.setState({ categories: res.data })
      })
  }

  refetchPageData = () => {
    const user = this.context;
    const categories = user.categories;
    if (user.categories.length === 0) {
      this.getList();
    } else {
      this.setState({ categories: categories });
    }
}

  render() {
    const { categories } = this.state;

    return (
      <main>
        <section className="corousel-justifier">
          <ControlledCarousel />
        </section>
        <section className="home">
          {categories.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <article key={item.key} className="home__category">
                  <img className="category__image" src={`.` + item.imageUrl} alt=""></img>
                  <div className="category__description-wrapper">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <Link role="navigation" to={{ pathname: '/products', state: { catId: item.id } }} className="w3-button w3-pink" aria-label={`Explore ` + item.name}>
                      {`Explore ` + item.name}</Link>
                  </div>
                </article>
              )
            }
            else {
              return (
                <article key={item.key} className="home__category">
                  <div className="category__description-wrapper">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <Link role="navigation" to={{ pathname: '/products', state: { catId: item.id } }} className="w3-button w3-pink" aria-label={`Explore ` + item.name}>
                      {`Explore ` + item.name}</Link>
                  </div>
                  <img className="category__image" src={`.` + item.imageUrl} alt=""></img>
                </article>
              )
            }

          })}
        </section>
      </main>
    );
  }
}

export default withRouter(Home);