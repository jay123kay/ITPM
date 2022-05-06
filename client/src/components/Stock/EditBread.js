import React, { Component } from 'react'
import axios from 'axios'
import './EditStock.css'

export default class EditBread extends Component {


  constructor(props){
    super(props);
    this.state={
      name:"",
      uPrice:"",
      quantity:"",
      inValue:"",
      mDate:"",
      eDate:""
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
    const {name,uPrice,quantity,inValue,mDate,eDate} = this.state;

    const data ={
      name:name,
      uPrice:uPrice,
      quantity:quantity,
      inValue:inValue,
      mDate:mDate,
      eDate:eDate
    }

    console.log(data)

    axios.put(`/bread/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Stock Update Successfully")
        this.setState(
          {
            name:"",
            uPrice:"",
            quantity:"",
            inValue:"",
            mDate:"",
            eDate:""
          }
        )
      }
    })
  }




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/bread/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          name:res.data.bread.name,
          uPrice:res.data.bread.uPrice,
          quantity:res.data.bread.quantity,
          inValue:res.data.bread.inValue,
          mDate:res.data.bread.mDate,
          eDate:res.data.bread.eDate
        });

        console.log(this.state.bread);
      }
    });
  }


  render(){
    return(
      <div className="body4">
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h1 className-="h3 mb-3 font-weight-normal">Edit Stock</h1>
          <form className="needs-validation" noValidate>
            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Name</label>
              <input type="text"
              className="form-control"
              name="name"
              placeholder="Enter Name"
              value={this.state.name}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Unit Price</label>
              <input type="number"
              className="form-control"
              name="uPrice"
              placeholder="Enter Unit Price"
              value={this.state.uPrice}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Quantity</label>
              <input type="number"
              className="form-control"
              name="quantity"
              placeholder="Enter Quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Inventory value</label>
              <input type="number"
              className="form-control"
              name="inValue"
              placeholder="Enter Inventory value"
              value={this.state.inValue}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Manufacture Date</label>
              <input type="date"
              className="form-control"
              name="mDate"
              placeholder="Enter Manufacture Date"
              value={this.state.mDate}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}>Expiry Date</label>
              <input type="date"
              className="form-control"
              name="eDate"
              placeholder="Enter Expiry Date"
              value={this.state.eDate}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-squre"></i>
              &nbsp; Update
            </button>
          </form>
      </div>
      </div>
    )
  }
}