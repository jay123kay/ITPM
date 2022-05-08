import React, { Component } from 'react';
import axios from 'axios';

export default class CreateOrder extends Component {

  constructor(props){
    super(props);
    this.state={
      cusID:"",
      cusName:"",
      orderID:"",
      orderType:"",
      quant:""
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

    const {cusID,cusName,orderID,orderType,quant} = this.state;

    const data ={
      cusID:cusID,
      cusName:cusName,
      orderID:orderID,
      orderType:orderType,
      quant:quant
    }

    console.log(data)

    axios.post("/order/save",data).then((res) =>{
      if(res.data.success){
        alert("Order Created")
        this.setState(
          {
            cusID:"",
            cusName:"",
            orderID:"",
            orderType:"",
            quant:""
          }
        )
      }
    })
  }


  render(){
    return(
      <div className="body2">
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h4 className-="h3 mb-3 font-weight-normal">Add Orders</h4>
          <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Customer ID</b></label>
              <input type="text"
              className="form-control"
              name="cusID"
              placeholder="Enter Item"
              value={this.state.cusID}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Customer Name</b></label>
              <input type="text"
              className="form-control"
              name="cusName"
              placeholder="Enter Item"
              value={this.state.cusName}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Order ID</b></label>
              <input type="text"
              className="form-control"
              name="orderID"
              placeholder="Enter Main Category"
              value={this.state.orderID}
              onChange={this.handleInputChange}/>
            </div>

            <p style={{marginBottom:'1px'}}><b>Order Type :</b> {FormData.orderType}</p>
            <div>
            &nbsp;
            &nbsp;
              <label>Take In</label>
              &nbsp;
              <input type="radio" name ="orderType" value="Take In"
              onChange={this.handleInputChange}/>
              <br></br>
              &nbsp;
              &nbsp;
              <label>Take Out</label>
              &nbsp;
              <input type="radio" name ="orderType" value="Take Out"
              onChange={this.handleInputChange}/>
              <br></br>
              &nbsp;
              &nbsp;
              <label>Delivery</label>
              &nbsp;
              <input type="radio" name ="orderType" value="Delivery"
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Quantity</b></label>
              <input type="text"
              className="form-control"
              name="quant"
              placeholder="Enter Quantity"
              value={this.state.quant}
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