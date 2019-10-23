import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Home from './pages/Home';
import Products from './pages/Products';
import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <div className="app">
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/products' component={Products} />
        </Switch>
        <Footer />
      </div>
    )
    return (
      <BrowserRouter>
        <App/>
      </BrowserRouter>
    );
  }
}

export default App;

