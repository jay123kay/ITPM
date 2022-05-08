import React, { Component } from 'react';
import axios from 'axios';
import'./CreatePost.css';

export default class EditPost extends Component {


  constructor(props){
    super(props);
    this.state={
      fbCode:"",
      fnbName:"",
      mainCat:"",
      subCat:"",
      quantity:"",
      price:""
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
    const {fbCode,fnbName,mainCat,subCat,quantity,price} = this.state;

    const data ={
      fbCode:fbCode,
      fnbName:fnbName,
      mainCat:mainCat,
      subCat:subCat,
      quantity:quantity,
      price:price
    }

    console.log(data)

    axios.put(`/post/update/${id}`,data).then((res) =>{
      if(res.data.success){
        alert("Post Updated Successfully")
        this.setState(
          {
            fbCode:"",
            fnbName:"",
            mainCat:"",
            subCat:"",
            quantity:"",
            price:""
          }
        )
      }
    })
  }




  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          fbCode:res.data.post.fbCode,
          fnbName:res.data.post.fnbName,
          mainCat:res.data.post.mainCat,
          subCat:res.data.post.subCat,
          quantity:res.data.post.quantity,
          price:res.data.post.price
        });

        console.log(this.state.post);
      }
    });
  }


  render(){
    return(
      <div className="body1">
      <div classNAme="col-md-8 mt-4 mx-auto">
        <h4 className-="h3 mb-3 font-weight-normal">Edit Details</h4>
          <form className="needs-validation" noValidate>
          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Code No.</b></label>
              <input type="text"
              className="form-control"
              name="fbCode"
              placeholder="Enter Item"
              value={this.state.fbCode}
              onChange={this.handleInputChange}/>
          </div>

          <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Foods/Beverages</b></label>
              <input type="text"
              className="form-control"
              name="fnbName"
              placeholder="Enter Item"
              value={this.state.fnbName}
              onChange={this.handleInputChange}/>
            </div>

            <p style={{marginBottom:'1px'}}><b>Main Category :</b> {FormData.mainCat}</p>
            <div>
            &nbsp;
            &nbsp;
              <label>Food</label>
              &nbsp;
              <input type="radio" name ="mainCat" value="Food"
              onChange={this.handleInputChange}/>
              <br></br>
              &nbsp;
              &nbsp;
              <label>Beverage</label>
              &nbsp;
              <input type="radio" name ="mainCat" value="Beverage"
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Sub Category</b></label>
              <input type="text"
              className="form-control"
              name="subCat"
              placeholder="Enter Sub Category"
              value={this.state.subCat}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Quantity</b></label>
              <input type="text"
              className="form-control"
              name="quantity"
              placeholder="Enter Quantity"
              value={this.state.quantity}
              onChange={this.handleInputChange}/>
            </div>

            <div className="form-group" style={{marginBottom:'15px'}}>
              <label style={{marginBottom:'5px'}}><b>Price(LKR).</b></label>
              <input type="text"
              className="form-control"
              name="price"
              placeholder="Enter Price"
              value={this.state.price}
              onChange={this.handleInputChange}/>
            </div>

            <button className="btn btn-success" type="submit" style={{marginTop:'15px'}} onClick={this.onSubmit}>
              <i className="far fa-check-square"></i>
              &nbsp; Update
            </button>
          </form>
      </div>
      </div>
    )
  }
}