import React, { Component} from 'react';
import axios from 'axios';
import './Stock.css'
import jsPDF from "jspdf";

export default class Fruit extends Component {
  constructor(props){
  super(props);

  this.state={
    fruits:[]
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
    this.retrieveFruits();
  }

  retrieveFruits(){
    axios.get("/fruits").then(res =>{
      if(res.data.success){
        this.setState({
        fruits:res.data.existingFruits
        });
      console.log(this.state.fruits);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`/fruit/delete/${id}`).then((res) =>{
      alert("Deteted Successfully");
      this.retrieveFruits();
    })
  }

  filterData(fruits,searchKey){
    const result = fruits.filter((fruit) =>
    fruit.name.toLowerCase().includes(searchKey) 
    )

    this.setState({fruits:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("fruits").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingFruits,searchKey)
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
        <button className="btn btn-success"><a href="/addFriut" style={{textDecoration:'none',color:'white'}}>Add Employee</a></button>
        <br></br>
        <br></br>

        <table id="content" className="table">
          <thead>
            <tr>
            <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Inventory value</th>
                <th scope="col">Manufacture Date</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.fruits.map((fruits,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/postFriut/${fruits._id}`} style = {{textDecoration:'none'}}>
                    {fruits.name}
                    </a>
                </td>
                <td>{fruits.uPrice}</td>
                <td>{fruits.quantity}</td>
                <td>{fruits.inValue}</td>
                <td>{fruits.mDate}</td>
                <td>{fruits.eDate}</td>
                <td>
                  <a className="btn btn-warning" href={`/editFriut/${fruits._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(fruits._id)}>
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