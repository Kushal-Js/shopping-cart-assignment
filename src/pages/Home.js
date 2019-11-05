import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
// import ImageSlider from '../components/ImageSlider';
import ControlledCarousel from '../components/Corousel';
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
        <div className="home-wrapper">
        {categories.map((item) => {
          return (
            <article key={item.key} className="product-wrapper">
              <span className="description-image">
              <img src={`.` + item.imageUrl} alt=""></img>
              </span>
              <span className="description-wrapper">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button role="navigation" onClick={() => this.navigate(item.id)} className="w3-button w3-pink" type="button">{`Explore `+ item.name}</button>
              </span>
            </article>
          )
        })}
        </div>
      </div>  
    );
  }
//  className="home-wrapper"
  navigate(catId) {
    this.props.history.push('/products', {catId});
  }
}
export default withRouter(Home);