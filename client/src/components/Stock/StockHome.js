import React from "react";
import {Link } from "react-router-dom";
import './StockHome.css'


 function StockHome() {

     return (
      <div className="body2">
        <div class="wrap">
        <br></br><br></br><br></br><br></br>
        <Link to="/Stock"><button class="button">vegetables</button></Link><br></br><br></br>
        <Link to="#"><button class="button">Fruits</button></Link><br></br><br></br>
        <Link to="#"><button class="button">Breads</button></Link><br></br><br></br>
        <Link to="#"><button class="button">Meat</button></Link><br></br><br></br><br></br><br></br>
        </div>
      </div>
     );

 }

 export default StockHome;