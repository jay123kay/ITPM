import React, { Component } from 'react'
import axios from 'axios'
import './CreateBooking.css';

export default class CreateBooking extends Component {

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

  validate = ()=>{
    let nameError="";
    let mailError="";
    let eventError="";
    let eventdateError="";
    let eventstartError="";
    let eventendError="";
    let noguestsError="";


    if(!this.state.customerName){
        nameError ='*Customer Name cannot be blank';
    }
    if(!this.state.email){
        mailError ='*Email cannot be blank';
    }
    if(!this.state.event){
        eventError ='*Event cannot be blank';
    }
    if(!this.state.eventDate){
        eventdateError ='*Event date cannot be blank';
    }
    if(!this.state.eventStart){
      eventstartError ='*Event start cannot be blank';
    }
    if(!this.state.eventEnd){
      eventendError ='*Event end cannot be blank';
    }
    if(!this.state.noOfGuests){
      noguestsError ='*Number of guests cannot be blank';
    }
    if (nameError || mailError|| eventError || eventdateError || eventstartError || eventendError || noguestsError){
        this.setState({nameError, mailError, eventError, eventdateError, eventstartError, eventendError, noguestsError});
        return false;
    }
    return true;
}
  onSubmit = (e) =>{
    e.preventDefault();
    const isValid = this.validate();

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
    if (isValid) {
    console.log(data)

    axios.post("/booking/save",data).then((res) =>{
      if(res.data.success){
        alert("Booking Created")
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
  }

  render(){
    return(
      <div className='body1'>
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h2 className-="h3 mb-3 font-weight-normal">Banquet Hall Reservation</h2><br></br>
          <form className="needs-validation" noValidate>
          <div class="row mb-3">
            <label for="inputCustomerName" class="col-sm-2 col-form-label">Customer Name</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputCustomerName"
              name="customerName"
              placeholder="Enter Customer Name"
              value={this.state.customerName}
              onChange={this.handleInputChange}/>
                <div style={{ fontSize:12, color:"red"}}>
                               {this.state.nameError}
                                </div>
            </div></div>

            <div class="row mb-3">
            <label for="inputEmail" class="col-sm-2 col-form-label">Email Address</label>
            <div class="col-sm-10">
            <input type="email" class="form-control" id="inputEmail"
              name="email"
              placeholder="Enter Email Address"
              value={this.state.email}
              onChange={this.handleInputChange}/>
                <div style={{ fontSize:12, color:"red"}}>
                               {this.state.mailError}
                                </div>
                                  
            </div></div>

            <div class="row mb-3">
            <label for="inputEvent" class="col-sm-2 col-form-label">Event</label>
            <div class="col-sm-10">
            <input type="text" class="form-control" id="inputEvent"
              placeholder="Enter Event"
              name="event"
              value={this.state.event}
              onChange={this.handleInputChange}/>
                <div style={{ fontSize:12, color:"red"}}>
                               {this.state.eventError}
                                </div>
            </div></div>

            <div class="row mb-3">
            <label for="inputEventDate" class="col-sm-2 col-form-label">Event Date</label>
            <div class="col-sm-10">
            <input type="date" class="form-control" id="inputEventDate"
              name="eventDate"
              value={this.state.eventDate}
              onChange={this.handleInputChange}/>
                <div style={{ fontSize:12, color:"red"}}>
                               {this.state.eventdateError}
                                </div>
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
                <div style={{ fontSize:12, color:"red"}}>
                               {this.state.eventstartError}
                                </div>
            </div></div>


            <div class="row mb-3">
            <label for="inputEndTime" class="col-sm-2 col-form-label">Event End Time</label>
            <div class="col-sm-10">
            <input type="time" class="form-control" id="inputEndTime"
             className="form-control"
             name="eventEnd"
             placeholder="Enter Event End Time"
             value={this.state.eventEnds}
             onChange={this.handleInputChange}/>
               <div style={{ fontSize:12, color:"red"}}>
                               {this.state.eventendError}
                                </div>
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
                <div style={{ fontSize:12, color:"red"}}>
                               {this.state.noguestsError}
                                </div>
            </div></div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Save
            </button>
          </form>
      </div></div>
    )
  }
}

