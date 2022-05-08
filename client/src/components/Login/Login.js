import React, { Component } from 'react'
import axios from 'axios'
import './login.css';

export default class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      name:"",
      email:"",
      
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
    let nameError="";
    let mailError="";
   


    if(!this.state.name){
        nameError ='*Name cannot be blank';
    }
    if(!this.state.email){
        mailError ='*Email cannot be blank';
    }
  
    if (nameError || mailError){
        this.setState({nameError, mailError});
        return false;
    }
    return true;
}
  onSubmit = (e) =>{
    e.preventDefault();
    const isValid = this.validate();

    const {name, email} = this.state;

    const data ={
      name:name,
      email:email,
    }
    if (isValid) {
    console.log(data)

    axios.post("/login/save",data).then((res) =>{
      if(res.data.success){
        alert("Login Successful")
        this.setState(
          {
            name:"",
            email:"",
           
          }
        )
      }
    })
  }
  }

  render(){
    return(
      <div className='login'>
      <div className="col-md-8 mt-4 mx-auto">
        <h2 className-="h3 mb-3 font-weight-normal">Administrator Login</h2><br></br>
          <form className="needs-validation" noValidate>
          <div class="row mb-3">
            <label for="inputName" class="col-sm-2 col-form-label">Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputName"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange}/>
              
            </div></div>

            <div class="row mb-3">
            <label for="inputEmail" class="col-sm-2 col-form-label">Email Address</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail"
              name="email"
              placeholder="Enter Email Address"
              value={this.state.email}
              onChange={this.handleInputChange}/>
               
            </div></div>



            <button className="btn btn-success"><a href="/home" style={{textDecoration:'none', color:'white'}}>Login</a></button>

          </form>
          
      </div></div>
    )
  }
}