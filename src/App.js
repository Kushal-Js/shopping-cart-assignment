import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Header from './molecules/Header';
import Footer from './atoms/Footer';
import Login from './organisms/Login';
import Register from './organisms/Register';
import Home from './organisms/Home';
import Products from './organisms/Products';
import { CartProvider } from './shared/cart-context';
import { CategoryProvider } from './shared/category-context';
import './App.css';

class App extends Component {
  render() {
    const App = () => (
      <CartProvider>
        <CategoryProvider>
        <Header />
        <Switch>
          <Route exact path='/' component={Login} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route exact path='/home' component={Home} />
          <Route exact path='/products' component={Products} />
        </Switch>
        <Footer />
        </CategoryProvider>
      </CartProvider>
    )
    return (
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
  }
}

export default App;

