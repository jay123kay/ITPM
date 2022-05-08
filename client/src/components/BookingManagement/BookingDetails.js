import React, { Component } from 'react';
import axios from 'axios';
import './BookingDetails.css';

export default class BookingDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      booking:{}
    };
  }

  componentDidMount(){
    const id = this.props.match.params.id;

    axios.get(`/booking/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          booking:res.data.booking
        });
        console.log(this.state.booking)
      }
    });
  }
  render() {

    const {customerName,email,event,eventDate,eventStart,eventEnd,noOfGuests} = this.state.booking;
    
    return (
      <div className='bodybd'>
     <div style={{marginTop:'20px'}}>
       <h4>{customerName}</h4>
       <hr/>


       <dl className="row">
         <dt className="col-sm-3">Email Address</dt>
         <dd className="col-sm-9">{email}</dd>

         <dt className="col-sm-3">Event</dt>
         <dd className="col-sm-9">{event}</dd>

         <dt className="col-sm-3">Event Date</dt>
         <dd className="col-sm-9">{eventDate}</dd>

         <dt className="col-sm-3">Event Start</dt>
         <dd className="col-sm-9">{eventStart}</dd>

         <dt className="col-sm-3">Event End</dt>
         <dd className="col-sm-9">{eventEnd}</dd>

         <dt className="col-sm-3">Number of Guests</dt>
         <dd className="col-sm-9">{noOfGuests}</dd>

       </dl>
       
       
            </div></div>
    )
  }
}