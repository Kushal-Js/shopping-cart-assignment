import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import axios from 'axios';
import ImageSlider from '../components/ImageSlider';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
    this.navigate = this.navigate.bind(this);
  }

  componentDidMount() {
    this.getList();
  }

  getList = () => {
    axios.get('http://localhost:8080/api/categories')
      .then((res) => {
        this.setState({ categories: res.data })
      })
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="home-wrapper">
        <div>
          <ImageSlider />
        </div>
        {categories.map((item) => {
          return (
            <article key={item.key}>
              <img src={`.` + item.imageUrl} alt=""></img>
              <div className="text">
                <h3>{item.name}</h3>
                <p>{item.description}</p>
                <button onClick={() => this.navigate(item.id)} type="button">{`Explore `+ item.name}</button>
              </div>
            </article>
          )
        })}
      </div>  
    );
  }

  navigate(catId) {
    this.props.history.push('/products', {catId});
  }
}
export default withRouter(Home);