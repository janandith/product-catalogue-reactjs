import React, {Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Route, Link} from 'react-router-dom';

import './App.css';
import ProductList from './ProductList/ProductList';
import AddProduct from './AddProduct/AddProduct';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="Products">
          <header>
            <h1>Product Catalogue</h1>
            <nav>
              <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/add-product">Add Product</Link></li>
              </ul>
            </nav>
          </header>
          <Route path="/" exact component={ProductList}></Route>
          <Route path="/add-product" exact component={AddProduct}></Route>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
