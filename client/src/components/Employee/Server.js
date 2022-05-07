import React, { Component} from 'react';
import axios from 'axios';
import './Server.css'
import jsPDF from "jspdf";

export default class Server extends Component {
  constructor(props){
  super(props);

  this.state={
    servers:[]
  };

  }

  GeneratePDF = ()=> {
    var doc = new jsPDF("p", "pt", "b3", "pdf");
    doc.html(document.querySelector('#content'),{
           callback: function(pdf){
               pdf.save("Stock.pdf");
           }
    });
  };

  componentDidMount(){
    this.retrieveServers();
  }

  retrieveServers(){
    axios.get("/servers").then(res =>{
      if(res.data.success){
        this.setState({
        servers:res.data.existingServers
        });
      console.log(this.state.servers);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`/server/delete/${id}`).then((res) =>{
      alert("Deteted Successfully");
      this.retrieveServers();
    })
  }

  filterData(servers,searchKey){
    const result = servers.filter((server) =>
    server.name.toLowerCase().includes(searchKey) ||
    server.role.toLowerCase().includes(searchKey) 
    )

    this.setState({servers:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("servers").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingServers,searchKey)
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
        <button className="btn btn-success"><a href="/addServer" style={{textDecoration:'none',color:'white'}}>Add Employee</a></button>
        <br></br>
        <br></br>

        <table id="content" className="table">
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
            {this.state.servers.map((servers,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/postServer/${servers._id}`} style = {{textDecoration:'none'}}>
                    {servers.name}
                    </a>
                </td>
                  <td>{servers.role}</td>
                  <td>{servers.age}</td>
                  <td>{servers.gender}</td>
                  <td>{servers.email}</td>
                  <td>{servers.address}</td>
                  <td>{servers.contactNo}</td>
                <td>
                  <a className="btn btn-warning" href={`/editServer/${servers._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(servers._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                  </a>
                </td>
              </tr>


            ))}
          </tbody>
        </table>

        
        <br></br>
        <br></br>
        <button className="btn btn-success"><a href="#"style={{textDecoration:'none',color:'white'}}onClick={this.GeneratePDF} type="primary">Generate Report</a></button>
          
      </div>
      </div>
    )
  }
} 