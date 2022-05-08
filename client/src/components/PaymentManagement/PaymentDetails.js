import React, { Component } from 'react';
import axios from 'axios';
import '../BookingManagement/BookingDetails.css';

export default class PaymentDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      payment:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/payment/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
            payment:res.data.payment
        });
        console.log(this.state.payment)
      }
    });
  }
  render() {

    const {customerName,noofhours,chargeperhour,totalcharge,date,time} = this.state.payment;
    
    return (
      <div className='bodybd'>
     <div style={{marginTop:'20px'}}>
       <h4>{customerName}</h4>
       <hr/>


       <dl className="row">
         <dt className="col-sm-3">Number of Hours</dt>
         <dd className="col-sm-9">{noofhours}</dd>

         <dt className="col-sm-3">Charge per Hour</dt>
         <dd className="col-sm-9">{chargeperhour}</dd>

         <dt className="col-sm-3">Total Charge</dt>
         <dd className="col-sm-9">{totalcharge}</dd>

         <dt className="col-sm-3">Date</dt>
         <dd className="col-sm-9">{date}</dd>

         <dt className="col-sm-3">Time</dt>
         <dd className="col-sm-9">{time}</dd>


       </dl>
       
       
            </div></div>
    )
  }
}