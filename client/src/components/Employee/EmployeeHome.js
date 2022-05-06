import React from "react";
import {Link } from "react-router-dom";
import './EmployeeHome.css'


 function EmployeeHome() {

     return (
      <div className="bodyHome">
        <div class="wrap">
        <br></br><br></br><br></br><br></br>
        <Link to="/Employee"><button class="button">Chef</button></Link><br></br><br></br>
        <Link to="/Server"><button class="button">Server</button></Link><br></br><br></br>
        <Link to="#"><button class="button">Cashier</button></Link><br></br><br></br>
        <Link to="#"><button class="button">Cleaning staff</button></Link><br></br><br></br><br></br><br></br>
        </div>
      </div>
     );

 }

 export default EmployeeHome;