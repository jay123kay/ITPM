import React, {Component} from 'react';
import axios from 'axios';
import './BookingHome.css';
import jsPDF from "jspdf";

export default class BookingHome extends Component{
  constructor(props){
    super(props);

    this.state={
      bookings:[]
    };
  }

//Report generation
  GeneratePDF =()=>{
    var doc = new jsPDF("p", "pt", "a2", "pdf");
    doc.html(document.querySelector('#content'),{
           callback: function(pdf){
               pdf.save("mypdf.pdf");
           }
    });
  };

  componentDidMount(){
    this.retrieveBookings();
  }
//Get all bookings
  retrieveBookings(){
    axios.get("/bookings").then(res =>{
      if(res.data.success){
        this.setState({
          bookings:res.data.existingBookings
        });
        console.log(this.state.bookings)
      }
    });
  }

  //Delete a relevent booking
  onDelete = (id) =>{
    axios.delete(`/booking/delete/${id}`).then((res) =>{
      alert("Deleted Successfully");
      this.retrieveBookings();
    })
  }

  //search a booking
  filterData(bookings,searchKey){
    const result = bookings.filter((booking) =>
    booking.customerName.toLowerCase().includes(searchKey) ||
    booking.email.toLowerCase().includes(searchKey) ||
    booking.event.toLowerCase().includes(searchKey) ||
    booking.eventDate.toLowerCase().includes(searchKey) ||
    booking.eventStart.toLowerCase().includes(searchKey) ||
    booking.eventEnd.toLowerCase().includes(searchKey) ||
    booking.noOfGuests.toLowerCase().includes(searchKey) 

    )

    this.setState({bookings:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/bookings").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingBookings,searchKey)
      }
    });
  }


 //Output 
  render(){
    return(
      <div className='body' id="content">
      <div className="row">
        <div className="col-lg-9 mt-2 mb-2">
          <h2>Banquet Hall Reservations</h2>
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
              <th scope="col">Booking Number</th>
              <th scope="col">Customer Name</th>
              <th scope="col">Email Address</th>
              <th scope="col">Event</th>
              <th scope="col">Event Date</th>
              <th scope="col">Event Start</th>
              <th scope="col">Event End</th>
              <th scope="col">No of Guests</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.bookings.map((bookings,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>
                    <a href ={`/booking/${bookings._id}`} style={{textDecoration:'none'}}>
                    {bookings.customerName}
                    </a>
                    </td>
                <td>{bookings.email}</td>
                <td>{bookings.event}</td>
                <td>{bookings.eventDate}</td>
                <td>{bookings.eventStart}</td>
                <td>{bookings.eventEnd}</td>
                <td>{bookings.noOfGuests}</td>
                <td>
                <a className="btn btn-warning" href={`/edit/${bookings._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(bookings._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                  </a>&nbsp;
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none', color:'white'}}>Create New Booking</a></button>
      </div>
    )
    } }
