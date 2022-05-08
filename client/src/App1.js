import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import CreatePost from './components/Foodnbev/CreatePost';
import EditPost from './components/Foodnbev/EditPost';
import Home from './components/Foodnbev/Home';
import NavBar from './components/Foodnbev/NavBar';
import PostDetails from './components/Foodnbev/PostDetails';

export default class App1 extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="container">
        <NavBar/>
        <Route path="/" exact component={Home}></Route>
        <Route path="/add" component={CreatePost}></Route>
        <Route path="/edit/:id" component={EditPost}></Route>
        <Route path="/post/:id" component={PostDetails}></Route>
      </div>
      
      </BrowserRouter>
      
    )
  }
}