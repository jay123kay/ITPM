import React, { Component} from 'react';
import axios from 'axios';
import './Employee.css'

export default class Employee extends Component {
  constructor(props){
  super(props);

  this.state={
    employees:[]
  };

  }

  componentDidMount(){
    this.retrieveEmployees();
  }

  retrieveEmployees(){
    axios.get("/employees").then(res =>{
      if(res.data.success){
        this.setState({
        employees:res.data.existingEmployees
        });
      console.log(this.state.employees);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`/employee/delete/${id}`).then((res) =>{
      alert("Deteted Successfully");
      this.retrieveEmployees();
    })
  }

  filterData(employees,searchKey){
    const result = employees.filter((employee) =>
    employee.name.toLowerCase().includes(searchKey) ||
    employee.role.toLowerCase().includes(searchKey) 
    )

    this.setState({employees:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("employees").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingEmployees,searchKey)
      }
    });
  }

  render(){
    return (
      <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>Employee Details</h4>
          </div>
          <div className="col-lg-3 mt-2 mb-2">
            <input
            className="form-control"
            type="search"
            placeholder="Search"
            name="searchQuery"
            onChange={this.handleSearchArea}>

            </input>
          </div>
        </div>

        
        <br></br>
        <button className="btn btn-success"><a href="/addEmployee" style={{textDecoration:'none',color:'white'}}>Add Employee</a></button>
        <br></br>
        <br></br>

        <table className="table">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Name</th>
              <th scope="col">Role</th>
              <th scope="col">Age</th>
              <th scope="col">Gender</th>
              <th scope="col">Address</th>
              <th scope="col">Email</th>
              <th scope="col">Contact No</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map((employees,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/postEmployee/${employees._id}`} style = {{textDecoration:'none'}}>
                    {employees.name}
                    </a>
                </td>
                  <td>{employees.role}</td>
                  <td>{employees.age}</td>
                  <td>{employees.gender}</td>
                  <td>{employees.email}</td>
                  <td>{employees.address}</td>
                  <td>{employees.contactNo}</td>
                <td>
                  <a className="btn btn-warning" href={`/editEmployee/${employees._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(employees._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                  </a>
                </td>
              </tr>


            ))}
          </tbody>
        </table>

        
        <br></br>
        <br></br>
        <button className="btn btn-success"><a href="#"style={{textDecoration:'none',color:'white'}}>Report Gen</a></button>
          
      </div>
      </div>
    )
  }
} 