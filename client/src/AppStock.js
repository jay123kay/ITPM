import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import CreateStock from './components/Stock/CreateStock';
import EditStock from './components/Stock/EditStock';
import Stock from './components/Stock/Stock';
import StockDetails from './components/Stock/StockDetails';
import StockHome from './components/Stock/StockHome';
import NavBar from './components/Stock/NavBar';


export default class AppStock extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Route path="/" exact component={StockHome}></Route>
        <Route path="/stock" component={Stock}></Route>
        <Route path="/add" component={CreateStock}></Route>
        <Route path="/edit/:id" component={EditStock}></Route>
        <Route path="/postStock/:id" component={StockDetails}></Route>
      
        
      </div>
      
      </BrowserRouter>
      
    )
  }
}