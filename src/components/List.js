import React, { Component } from 'react';
import './List.css';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: []
    }
  }

  // Fetch the list on first mount
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
      <main className="list">
        {categories.map((item) => {
          return (
            <article key={item.key}>
              <img src={`.`+item.imageUrl} alt="Sample photo"></img>
              <div className="text">
                <h3>{item.description}</h3>
                <p>{item.order}</p>
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

{/* <div>
{categories.length ? (
  <div className="d-flex flex-row flex-wrap">
    {categories.map((item) => {
      return (
        <div className="card card-block col-md-3" key={item.key}>
          <div className="card-body">
            <h5 className="card-title">{item.description}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{item.order}</h6>
            <img src={`.../public`+item.imageUrl}></img>
          </div>
        </div>
      );
    })}
  </div>
) : (
    <div>
      <h2>No List Items Found</h2>
    </div>
  )
}
</div> */}