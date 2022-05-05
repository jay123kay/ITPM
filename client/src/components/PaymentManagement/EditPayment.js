import React, { Component } from 'react'
import axios from 'axios'
import '../BookingManagement/CreateBooking.css';
export default class EditPayment extends Component {


  constructor(props){
    super(props);
    this.state={
      customerName:"",
      category:"",
      payment:"",
      date:"",
      time:""
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
    const {customerName, category, payment, date, time} = this.state;

    const data ={
      customerName:customerName,
      category:category,
      payment:payment,
      date:date,
      time:time,
    }

    console.log(data)

    axios.put(`/payment/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Payment Updated Successfully")
        this.setState(
          {
            customerName:"",
            category:"",
            payment:"",
            date:"",
            time:"",
          }
        )
      }
    })
  }




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/payment/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          customerName:res.data.payment.customerName,
          category:res.data.payment.category,
          payment:res.data.payment.payment,
          date:res.data.payment.date,
          time:res.data.payment.time,
        });

        console.log(this.state.post);
      }
    });
  }

  render(){
    return(
      <div className='body1'>
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h2 className-="h3 mb-3 font-weight-normal">Edit Payment</h2><br></br>
          <form className="needs-validation" noValidate>
          <div class="row mb-3">
            <label for="inputCustomerName" class="col-sm-2 col-form-label">Customer Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputCustomerName"
              name="customerName"
              placeholder="Enter Customer Name"
              value={this.state.customerName}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputCategory" class="col-sm-2 col-form-label"> Category</label>
            <div class="col-sm-10">
            <input type="category" class="form-control" id="inputCategory"
              name="category"
              placeholder="Enter Category"
              value={this.state.category}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputPayment" class="col-sm-2 col-form-label">Payment</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputPayment"
              placeholder="Enter Payment"
              name="payment"
              value={this.state.payment}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputDate" class="col-sm-2 col-form-label">Date</label>
            <div class="col-sm-10">
            <input type="date" class="form-control" id="inputDate"
              name="date"
              value={this.state.date}
              onChange={this.handleInputChange}/>
            </div></div>

            


            <div class="row mb-3">
            <label for="inputTime" class="col-sm-2 col-form-label">Time</label>
            <div class="col-sm-10">
            <input type="time" class="form-control" id="inputTime"
             className="form-control"
             name="time"
             placeholder="Enter Time"
             value={this.state.time}
             onChange={this.handleInputChange}/>
           </div></div>


            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
            <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
          </form>
      </div></div>
    )
  }
}