import React, { Component } from 'react';
import ImageSlider from '../components/ImageSlider';
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  componentDidMount() {
    this.getList();
  }

  // Retrieves the list of items from the Express app
  getList = () => {
    fetch('http://localhost:8080/api/categories')
      .then(res => res.json())
      .then((res) => {
        this.setState({ categories: res })
      })
  }

  render() {
    const { categories } = this.state;

    return (
      <div className="home-wrapper">
        <article>
          <ImageSlider />
        </article>
        {categories.map((item) => {
          return (
            <article key={item.key}>
              <img src={`.` + item.imageUrl} alt="Sample photo"></img>
              <div className="text">
                <h3>{item.description}</h3>
                <p>{item.order}</p>
                <button>Here's why</button>
              </div>
            </article>
          )
        })}
      </div>
    );
  }
}
export default Home;