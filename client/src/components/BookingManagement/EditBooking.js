import React, { Component } from 'react'
import axios from 'axios'
import './CreateBooking.css';
export default class EditBooking extends Component {


  constructor(props){
    super(props);
    this.state={
      customerName:"",
      email:"",
      event:"",
      eventDate:"",
      eventStart:"",
      eventEnd:"",
      noOfGuests:""
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
    const {customerName, email, event, eventDate, eventStart, eventEnd, noOfGuests} = this.state;

    const data ={
      customerName:customerName,
      email:email,
      event:event,
      eventDate:eventDate,
      eventStart:eventStart,
      eventEnd:eventEnd,
      noOfGuests:noOfGuests,
    }

    console.log(data)

    axios.put(`/booking/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Booking Updated Successfully")
        this.setState(
          {
            customerName:"",
            email:"",
            event:"",
            eventDate:"",
            eventStart:"",
            eventEnd:"",
            noOfGuests:""
          }
        )
      }
    })
  }




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/booking/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          customerName:res.data.booking.customerName,
          email:res.data.booking.email,
          event:res.data.booking.event,
          eventDate:res.data.booking.eventDate,
          eventStart:res.data.booking.eventStart,
          eventEnd:res.data.booking.eventEnd,
          noOfGuests:res.data.booking.noOfGuests
        });

        console.log(this.state.post);
      }
    });
  }


  render(){
    return(
      <div className='bodybc'>
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h2 className-="h3 mb-3 font-weight-normal">Edit booking</h2><br></br>
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
            <label for="inputEmail" class="col-sm-2 col-form-label">Email Address</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail"
              name="email"
              placeholder="Enter Email Address"
              value={this.state.email}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputEvent" class="col-sm-2 col-form-label">Event</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputEvent"
              placeholder="Enter Event"
              name="event"
              value={this.state.event}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputEventDate" class="col-sm-2 col-form-label">Event Date</label>
            <div class="col-sm-10">
            <input type="date" class="form-control" id="inputEventDate"
              name="eventDate"
              value={this.state.eventDate}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputStartTime" class="col-sm-2 col-form-label">Event Start Time</label>
            <div class="col-sm-10">
            <input type="time" class="form-control" id="inputStartTime"
              className="form-control"
              name="eventStart"
              placeholder="Enter Event Start Time"
              value={this.state.eventStart}
              onChange={this.handleInputChange}/>
            </div></div>


            <div class="row mb-3">
            <label for="inputEndTime" class="col-sm-2 col-form-label">Event End Time</label>
            <div class="col-sm-10">
            <input type="time" class="form-control" id="inputEndTime"
             className="form-control"
             name="eventEnd"
             placeholder="Enter Event End Time"
             value={this.state.eventEnd}
             onChange={this.handleInputChange}/>
           </div></div>

              
            <div class="row mb-3">
            <label for="inputNoOfGuests" class="col-sm-2 col-form-label">Number of Guests</label>
            <div class="col-sm-10">
            <input type="number" class="form-control" id="inputNoOfGuests"
              className="form-control"
              name="noOfGuests"
              placeholder="Enter Number of Guests"
              value={this.state.noOfGuests}
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