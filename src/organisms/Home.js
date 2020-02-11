import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
// import ImageSlider from '../components/ImageSlider';
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
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    const user = this.context;
    const categories = user.categories;
    if (user.categories.length === 0) {
      this.getList();
    } else {
      this.setState({ categories: categories });
    }
  }

  getList = () => {
    const user = this.context;
    axios.get('http://localhost:8080/api/categories')
      .then((res) => {
        user.setCategory(res.data);
        this.setState({ categories: res.data })
      })
  }

  render() {
    const { categories } = this.state;

    return (
      <div>
        <article className="corousel-justifier">
          <ControlledCarousel />
        </article>
        <div className="home">
          {categories.map((item, index) => {
            if (index % 2 === 0) {
              return (
                <article key={item.key} className="home__category">
                  <img className="category__image" src={`.` + item.imageUrl} alt=""></img>
                  <div className="category__description-wrapper">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <button role="navigation" onClick={() => this.navigate(item.id)} className="w3-button w3-pink" type="button" aria-label={`Explore ` + item.name}>
                      {`Explore ` + item.name}</button>
                  </div>
                </article>
              )
            }
            else {
              return (
                <article key={item.key} className="home__category">
                  <div className="category__description-wrapper">
                    <h5>{item.name}</h5>
                    <p>{item.description}</p>
                    <button role="navigation" onClick={() => this.navigate(item.id)} className="w3-button w3-pink" type="button" aria-label={`Explore ` + item.name}>
                      {`Explore ` + item.name}</button>
                  </div>
                  <img className="category__image" src={`.` + item.imageUrl} alt=""></img>
                </article>
              )
            }

          })}
        </div>
      </div>
    );
  }

  navigate(catId) {
    this.props.history.push('/products', { catId });
  }
}

export default withRouter(Home);