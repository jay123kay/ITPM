import React, { Component } from 'react'
import axios from 'axios'
import './CreateServer.css'

export default class CreateServer extends Component {

  constructor(props){
    super(props);
    this.state={
        name:"",
        role:"",
        age:"",
        gender:"",
        email:"",
        address:"",
        contactNo:"",
        password:"",
        emailError:"",
        nameError:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  validate = ()=>{
    let emailError="";
    let nameError="";
    
    if (this.state.name.includes('@', "1", "2", "3", "4", "5", "6", "7", "8","9","0")){
        nameError='Invalid name. Please use words only, Do not use symbols and numbers';
        }
    if (!this.state.email.includes('@')){
            emailError='Invalid email. Valid email must have @ symbol';
    }
    if (emailError || nameError){
        this.setState({emailError, nameError});
        return false;
    }
    return true;
}

  onSubmit = (e) =>{
    e.preventDefault();
    const isValid = this.validate();

    const {name,role,age,gender,email,address,contactNo,password} = this.state;

    const data ={
        name:name,
        role:role,
        age:age,
        gender:gender,
        email:email,
        address:address,
        contactNo:contactNo,
        password:password
    }

    if (isValid) {
    console.log(data)

    axios.post("/server/save",data).then((res) =>{
      if(res.data.success){
        alert("Employee Created")
        this.setState(
          {
            name:"",
            role:"",
            age:"",
            gender:"",
            email:"",
            address:"",
            contactNo:"",
            password:""
          }
        )
      }
    })
  }
  }

  render(){
    return(
      <div className="body4">
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h1 className-="h3 mb-3 font-weight-normal">Create new Employees</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Name</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Role</label>
              <input type="text"
              className="form-control"
              name="role"
              placeholder="Enter Role"
              value={this.state.role}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Age</label>
              <input type="number"
              className="form-control"
              name="age"
              placeholder="Enter Age"
              value={this.state.age}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Gender</label>
              <input type="text"
              className="form-control"
              name="gender"
              placeholder="Enter Gender"
              value={this.state.gender}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Email</label>
              <input type="text"
              className="form-control"
              name="email"
              placeholder="Enter Email"
              value={this.state.email}
              onChange={this.handleInputChange}/>
              <div style={{ fontSize:12, color:"red"}}>{this.state.emailError}</div>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Address</label>
              <input type="text"
              className="form-control"
              name="address"
              placeholder="Enter address"
              value={this.state.address}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Contact No</label>
              <input type="text"
              className="form-control"
              name="contactNo"
              placeholder="Enter Contact No"
              value={this.state.contactNo}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Admin Declared Password</label>
              <input type="text"
              className="form-control"
              name="password"
              placeholder="Enter Password"
              value={this.state.password}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          </form>
      </div>
      </div>
    )
  }
}