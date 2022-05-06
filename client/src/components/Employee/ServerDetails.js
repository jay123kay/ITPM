import React, { Component } from 'react';
import axios from 'axios'
import './ServerDetails.css'


export default class ServerDetails extends Component {
  constructor(props){
    super(props);

    this.state={
        server:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/server/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
        server:res.data.server
        });

        console.log(this.state.server);
      }
    });
  }

  render() {

    const {name,role,age,gender,email,address,contactNo} = this.state.server;
    return (
      <div className="body1">
      <div style={{marginTop:'20px'}}>
        <h4>Employee Details</h4>
        <hr/>

        <br></br> <br></br> <br></br>
        
        <d1 className="row" style={{marginBottom:'15px'}}>
          <dt className="col-sm-3">Name</dt>
          <dd className="col-sm-9">{name}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Role</dt>
          <dd className="col-sm-9">{role}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Age</dt>
          <dd className="col-sm-9">{age}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Gender</dt>
          <dd className="col-sm-9">{gender}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Email</dt>
          <dd className="col-sm-9">{email}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Address</dt>
          <dd className="col-sm-9">{address}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Contact Number</dt>
          <dd className="col-sm-9">{contactNo}</dd><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </d1>
        </div></div>
      
      
    )
  }
}