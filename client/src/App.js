import React, { Component} from 'react';
import {BrowserRouter, Route} from 'react-router-dom'
import BookingDetails from './components/BookingManagement/BookingDetails';
import CreateBooking from './components/BookingManagement/CreateBooking';
import EditBooking from './components/BookingManagement/EditBooking';
import BookingHome from './components/BookingManagement/BookingHome';
import BookingMain from './components/BookingManagement/BookingMain';

import NavBar from './components/NavBar';
import CreatePayment from './components/PaymentManagement/CreatePayment';
import PaymentDetails from './components/PaymentManagement/PaymentDetails';
import EditPayment from './components/PaymentManagement/EditPayment';
import Login from './components/Login/Login';
import PaymentMain from './components/PaymentManagement/PaymentMain';
import PaymentHome from './components/PaymentManagement/PaymentHome';
import home from './components/home';


export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar/>

        <Route path="/login" exact component={Login}></Route>
        <Route path="/home" exact component={home}></Route>
        <Route path="/" exact component={BookingHome}></Route>
        <Route path="/add" component={CreateBooking}></Route>
        <Route path="/edit/:id" component={EditBooking}></Route>
        <Route path="/booking/:id" component={BookingDetails}></Route>
        <Route path="/main" exact component={BookingMain}></Route>
        <Route path="/payment" exact component={PaymentHome}></Route>
        <Route path="/paymentm" exact component={PaymentMain}></Route>
        <Route path="/add2" component={CreatePayment}></Route>
        <Route path="/payment/:id" component={PaymentDetails}></Route>
        <Route path="/edit2/:id" component={EditPayment}></Route>






        </div>
        </BrowserRouter>
   
    )
  }
}