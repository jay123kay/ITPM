import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import CreateBread from './components/Stock/CreateBread';
import EditBread from './components/Stock/EditBread';
import Bread from './components/Stock/Bread';
import BreadDetails from './components/Stock/BreadDetails';

export default class AppBread extends Component {
    render() {
      return (
        <BrowserRouter>
        <div className="container">
          <Route path="/bread" component={Bread}></Route>
          <Route path="/addBread" component={CreateBread}></Route>
          <Route path="/editBread/:id" component={EditBread}></Route>
          <Route path="/postBread/:id" component={BreadDetails}></Route>
        
          
        </div>
        
        </BrowserRouter>
        
      )
    }
}