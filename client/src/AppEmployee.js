import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import CreateEmployee from './components/Employee/CreateEmployee';
import EditEmployee from './components/Employee/EditEmployee';
import Employee from './components/Employee/Employee';
import EmployeeDetails from './components/Employee/EmployeeDetails';
import EmployeeHome from './components/Employee/EmployeeHome';



export default class AppEmployee extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <Route path="/employeeHome" exact component={EmployeeHome}></Route>
        <Route path="/employee" component={Employee}></Route>
        <Route path="/addEmployee" component={CreateEmployee}></Route>
        <Route path="/editEmployee/:id" component={EditEmployee}></Route>
        <Route path="/postEmployee/:id" component={EmployeeDetails}></Route>
        
      </div>
      
      </BrowserRouter>
      
    )
  }
}