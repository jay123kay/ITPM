import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import CreateServer from './components/Employee/CreateServer';
import EditServer from './components/Employee/EditServer';
import Server from './components/Employee/Server';
import ServerDetails from './components/Employee/ServerDetails';



export default class AppEmployee extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Route path="/server" component={Server}></Route>
        <Route path="/addServer" component={CreateServer}></Route>
        <Route path="/editServer/:id" component={EditServer}></Route>
        <Route path="/postServer/:id" component={ServerDetails}></Route>
        
      </div>
      
      </BrowserRouter>
      
    )
  }
}