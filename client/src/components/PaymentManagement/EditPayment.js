import React, { Component } from 'react'
import axios from 'axios'
import '../BookingManagement/CreateBooking.css';
export default class EditPayment extends Component {


  constructor(props){
    super(props);
    this.state={
      customerName:"",
      noofhours:"",
      chargeperhour:"",
      totalcharge:"",
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
    const {customerName, noofhours, chargeperhour, totalcharge, date, time} = this.state;

    const data ={
      customerName:customerName,
      noofhours:noofhours,
      chargeperhour:chargeperhour,
      totalcharge:totalcharge,
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
            noofhours:"",
            chargeperhour:"",
            totalcharge:"",
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
          noofhours:res.data.payment.noofhours,
          chargeperhour:res.data.payment.chargeperhour,
          totalcharge:res.data.payment.totalcharge,
          date:res.data.payment.date,
          time:res.data.payment.time,
        });

        console.log(this.state.post);
      }
    });
  }
  calculate =(e)=>{

    this.setState({totalcharge:parseInt(this.state.noofhours*this.state.chargeperhour)});
    e.preventDefault();
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
            <label for="inputNoofhours" class="col-sm-2 col-form-label"> Number of Hours</label>
            <div class="col-sm-10">
            <input type="noofhours" class="form-control" id="inputNoofhours"
              name="noofhours"
              placeholder="Enter  Number of Hours"
              value={this.state.noofhours}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputChargeperhour" class="col-sm-2 col-form-label">Charge per Hour</label>
            <div class="col-sm-10">
            <input type="chargeperhour" class="form-control" id="inputChargeperhour"
              name="chargeperhour"
              placeholder="Enter Charge per Hour"
              value={this.state.chargeperhour}
              onChange={this.handleInputChange}/>
            </div></div>

            <div class="row mb-3">
            <label for="inputTotalcharge" class="col-sm-2 col-form-label"> Total Charge</label>
            <div class="col-sm-10">
            <input type="totalcharge" class="form-control" id="inputTotalcharge"
              name="totalcharge"
              placeholder="Enter Total Charge"
              value={this.state.totalcharge}
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
            <button className="btn btn-success"  type="submit" style={{marginTop:'15px',width:'100px',float: 'right'}} onClick={this.calculate}> 
                      
                      &nbsp;Calculate 
                      <h2>{this.state.totalcharge}</h2>
                     </button>  

          </form>
      </div></div>
    )
  }
}