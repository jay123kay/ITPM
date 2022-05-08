import React, { Component } from 'react'
import './NavBar.css'

export default class NavBar extends Component {
  render() {
    return(
      <header>

           <div className="logo headerName">
              <h1><i class="fas fa-leaf"></i> . <i>Food o'clock</i></h1>
           </div>

           <ul >
            <li></li>  
            <li></li> 
           <li><a href="/home"><i className="fas fa-home"></i>Home</a></li>
                <li><a href="#"><i class="fas fa-gifts"></i>Food and beverage</a></li> 
                <li><a href="/mainb"><i class="fas fa-gifts"></i>Banquet Hall</a></li>
                <li><a href="#"><i class="fas fa-info"></i>About</a></li>
                <li><a href="/paymentm"><i className="fas fa-shopping-cart"></i>Pay</a></li>
                           
                <i class="fa-solid fa-burger-fries"></i>   
           </ul>   
       </header>
    )
  }
}
