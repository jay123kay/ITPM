import React, { Component} from 'react';
import axios from 'axios';
import'./OrderHome.css';
import jsPDF from "jspdf";

export default class OrderHome extends Component {
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };

  }

  GeneratePDF =()=>{
    var doc = new jsPDF("p", "pt", "a2", "pdf");
    doc.html(document.querySelector('#content'),{
           callback: function(pdf){
               pdf.save("mypdf.pdf");
           }
    });
  };

  componentDidMount(){
    this.retrieveOrders();
  }

  retrieveOrders(){
    axios.get("/orders").then(res =>{
      if(res.data.success){
        this.setState({
          orders:res.data.existingOrders
        });
      console.log(this.state.orders);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`/order/delete/${id}`).then((res) =>{
      alert("Deteted Successfully");
      this.retrieveOrders();
    })
  }

  filterData(orders,searchKey){
    const result = orders.filter((order) =>
    order.cusId.toLowerCase().includes(searchKey) ||
    order.cusName.toLowerCase().includes(searchKey)


    )

    this.setState({orders:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/orders").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingOrders,searchKey)
      }
    });
  }

  render(){
    return (
      <div className="body">
        <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h3>Orders</h3>
            <h4>All Orders</h4>
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
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Customer ID</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Order ID</th>
              <th scope="col">Order Type</th>
              <th scope="col">Quantity</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.orders.map((orders,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/order/${orders._id}`} style = {{textDecoration:'none'}}>
                    {orders.cusId}
                    </a>
                </td>
                <td>{orders.cusName}</td>
                <td>{orders.orderId}</td>
                <td>{orders.orderType}</td>
                <td>{orders.quant}</td>
                <td>
                  <a className="btn btn-danger" href="#"
                   onClick={() =>this.onDelete(orders._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                  </a>
                </td>
              </tr>


            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Order</a></button>
        &nbsp;
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="btn btn-warning" onClick={this.GeneratePDF} type="primary"><i className="fas fa-download"></i>&nbsp;Report</button>
          
      </div>
      </div>
    )
  }
} 