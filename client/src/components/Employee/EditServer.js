import React, { Component } from 'react'
import axios from 'axios'
import './EditServer.css'

export default class EditServer extends Component {


  constructor(props){
    super(props);
    this.state={
        name:"",
        role:"",
        age:"",
        gender:"",
        email:"",
        address:"",
        contactNo:""
    }
  }

  handleInputChange = (e) =>{
    const {name,value} = e.target;

    this.setState({
      ...this.state,
      [name]:value
    })

  }

  onSubmit = (e) =>{

    e.preventDefault();
    const id = this.props.match.params.id;
    const {name,role,age,gender,email,address,contactNo} = this.state;

    const data ={
        name:name,
        role:role,
        age:age,
        gender:gender,
        email:email,
        address:address,
        contactNo:contactNo
    }

    console.log(data)

    axios.put(`/server/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Employee Updated Successfully")
        this.setState(
          {
            name:"",
            role:"",
            age:"",
            gender:"",
            email:"",
            address:"",
            contactNo:""
          }
        )
      }
    })
  }




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/server/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
            name:res.data.server.name,
            role:res.data.server.role,
            age:res.data.server.age,
            gender:res.data.server.gender,
            email:res.data.server.email,
            address:res.data.server.address,
            contactNo:res.data.server.contactNo
        });

        console.log(this.state.server);
      }
    });
  }


  render(){
    return(
      <div className="body4">
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h1 className-="h3 mb-3 font-weight-normal">Edit Post</h1>
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

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-squre"></i>
              &nbsp; Update
            </button>
          </form>
      </div>
      </div>
    )
  }
}