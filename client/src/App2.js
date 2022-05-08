import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import CreateOrder from './components/Order/CreateOrder';
import OrderHome from './components/Order/OrderHome';
import NavBar from './components/Order/NavBar';
import OrderDetails from './components/Order/OrderDetails';

export default class App2 extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Route path="/orderHome" exact component={OrderHome}></Route>
        <Route path="/add" component={CreateOrder}></Route>
        <Route path="/post/:id" component={OrderDetails}></Route>
      </div>
      
      </BrowserRouter>
      
    )
  }
}
