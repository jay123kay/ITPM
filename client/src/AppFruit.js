import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import CreateFriut from './components/Stock/CreateFruit';
import EditFriut from './components/Stock/EditFruit';
import Fruit from './components/Stock/Fruit';
import FruitDetails from './components/Stock/FruitDetails';

export default class AppFruit extends Component {
    render() {
      return (
        <BrowserRouter>
        <div className="container">
          <Route path="/fruit" component={Fruit}></Route>
          <Route path="/addFriut" component={CreateFriut}></Route>
          <Route path="/editFriut/:id" component={EditFriut}></Route>
          <Route path="/postFriut/:id" component={FruitDetails}></Route>
        
          
        </div>
        
        </BrowserRouter>
        
      )
    }
}