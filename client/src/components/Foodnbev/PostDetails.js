import React, { Component } from 'react';
import axios from 'axios';
import'./PostDetails.css';

export default class PostDetails extends Component {
  constructor(props){
    super(props);

    this.state={
        post:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/post/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          post:res.data.post
        });

        console.log(this.state.post);
      }
    });
  }

  render() {

    const {fbCode,fnbName,mainCat,subCat,quantity,price} = this.state.post;
    return (
      <div className="body2">
      <div style={{marginTop:'20px'}}>
        <h3>Foods and Beverages</h3>
        <h4>{fbCode}</h4>
        <hr/>


        <dl className="row">
          <dt className="col-sm-3">Code No. :</dt>
          <dd className="col-sm-9">{fnbName}</dd>

          <dt className="col-sm-3">Main Category :</dt>
          <dd className="col-sm-9">{mainCat}</dd>

          <dt className="col-sm-3">Sub Category :</dt>
          <dd className="col-sm-9">{subCat}</dd>

          <dt className="col-sm-3">Quantity :</dt>
          <dd className="col-sm-9">{quantity}</dd>

          <dt className="col-sm-3">Price(LKR). :</dt>
          <dd className="col-sm-9">{price}</dd>
        </dl>
        </div>
      </div>
    )
  }
}