import React, {Component} from 'react';
import axios from 'axios';
import '../BookingManagement/BookingHome.css';

export default class PaymentHome extends Component{
  constructor(props){
    super(props);

    this.state={
      payments:[]
    };
  }

  componentDidMount(){
    this.retrievePayments();
  }

  retrievePayments(){
    axios.get("/payments").then(res =>{
      if(res.data.success){
        this.setState({
            payments:res.data.existingPayments
        });
        console.log(this.state.payments)
      }
    });
  }

  onDelete = (id) =>{
    axios.delete(`/payment/delete/${id}`).then((res) =>{
      alert("Deleted Successfully");
      this.retrievePayments();
    })
  }

  filterData(payments,searchKey){
    const result = payments.filter((payment) =>
    payment.customerName.toLowerCase().includes(searchKey) ||
    payment.noofhours.toLowerCase().includes(searchKey) ||
    payment.chargeperhour.toLowerCase().includes(searchKey) ||
    payment.date.toLowerCase().includes(searchKey) ||
    payment.time.toLowerCase().includes(searchKey) 
    )

    this.setState({payments:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/payments").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingPayments,searchKey)
      }
    });
  }

  
  render(){
    return(
      <div className='body'>
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h2>Payments</h2>
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
        <table className ="table">
          <thead>
            <tr>
              <th scope="col">Payment Number</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Number of Hours</th>
              <th scope="col">Charge per Hour</th>
              <th scope="col">Total Charge</th>
              <th scope="col">Date</th>
              <th scope="col">Time</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.payments.map((payments,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href ={`/payment/${payments._id}`} style={{textDecoration:'none'}}>
                    {payments.customerName}
                    </a>
                    </td>
                <td>{payments.noofhours}</td>
                <td>{payments.chargeperhour}</td>
                <td>{payments.totalcharge}</td>
                <td>{payments.date}</td>
                <td>{payments.time}</td>              
                <td>
                <a className="btn btn-warning" href={`/edit2/${payments._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(payments._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                  </a>&nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href="/add2" style={{textDecoration:'none', color:'white'}}>Create New Payment</a></button>
      </div>
    )
    } }
