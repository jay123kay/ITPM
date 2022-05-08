import React, { Component } from 'react';
import axios from 'axios';

export default class OrderDetails extends Component {
  constructor(props){
    super(props);

    this.state={
        post:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/order/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.order
        });

        console.log(this.state.order);
      }
    });
  }

  render() {

    const {cusID,cusName,orderID,orderType,quant} = this.state.order;
    return (
      <div className="body2">
      <div style={{marginTop:'20px'}}>
        <h3>Customer ID</h3>
        <h4>{cusID}</h4>
        <hr/>


        <dl className="row">
          <dt className="col-sm-3">Customer Name:</dt>
          <dd className="col-sm-9">{cusName}</dd>

          <dt className="col-sm-3">Order ID :</dt>
          <dd className="col-sm-9">{orderID}</dd>

          <dt className="col-sm-3">Order Type :</dt>
          <dd className="col-sm-9">{orderType}</dd>

          <dt className="col-sm-3">Quantity :</dt>
          <dd className="col-sm-9">{quant}</dd>
          
        </dl>
      </div>
      </div>
    )
  }
}