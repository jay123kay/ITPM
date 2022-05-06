import React, { Component } from 'react';
import axios from 'axios'
import './StockDetails.css'


export default class FruitDetails extends Component {
  constructor(props){
    super(props);

    this.state={
      fruit:{}
    };
  }

  componentDidMount(){

    const id = this.props.match.params.id;

    axios.get(`/fruit/${id}`).then((res) =>{
      if(res.data.success){
        this.setState({
          fruit:res.data.fruit
        });

        console.log(this.state.fruit);
      }
    });
  }

  render() {

    const {name,uPrice,quantity,inValue,mDate,eDate} = this.state.fruit;
    return (
      <div className="body1">
      <div style={{marginTop:'20px'}}>
        <h4>Stock Details</h4>
        <hr/>

        <br></br> <br></br> <br></br>
        
        <d1 className="row" style={{marginBottom:'15px'}}>
          <dt className="col-sm-3">Name</dt>
          <dd className="col-sm-9">{name}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Unit Price</dt>
          <dd className="col-sm-9">{uPrice}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Quantity</dt>
          <dd className="col-sm-9">{quantity}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Inventory value</dt>
          <dd className="col-sm-9">{inValue}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Manufacture Date</dt>
          <dd className="col-sm-9">{mDate}</dd><br></br><br></br><br></br>

          <dt className="col-sm-3">Expiry Date</dt>
          <dd className="col-sm-9">{eDate}</dd><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br><br></br>
        </d1>
        </div></div>
      
      
    )
  }
}