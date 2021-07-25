import React from "react"
import Header from "./components/Header"
import Product from "./components/Product"
import NewProduct from "./components/NewProduct"
import EditProduct from "./components/EditProduct"

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";

import {Provider} from "react-redux"
import store from "./store"
function App() {
  return (
    <Router>
      <Provider store={store}>
        <Header />
          <Switch>
            <Route exact path="/" component={Product}/>
            <Route exact path="/product/new" component={NewProduct}/>
            <Route exact path="/product/edit/:id" component={EditProduct}/>
          </Switch>
      </Provider>
    </Router>
  );
}

export default App;
