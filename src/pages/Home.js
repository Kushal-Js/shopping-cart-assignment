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
                <button onClick={this.navigate.bind(this)}>{`Explore `+ item.name}</button>
              </div>
            </article>
          )
        })}
      </div>
    );
  }

  navigate(){
    this.props.history.push("/products");
  }
}
export default Home;