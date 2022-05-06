import React, { Component} from 'react';
import axios from 'axios';
import './Stock.css'
import jsPDF from "jspdf";

export default class Stock extends Component {
  constructor(props){
  super(props);

  this.state={
    stocks:[]
  };
}

GeneratePDF =()=>{
  var doc = new jsPDF("p", "pt", "a3", "pdf");
  doc.html(document.querySelector('#content'),{
         callback: function(pdf){
             pdf.save("Stock.pdf");
         }
  });
};

  componentDidMount(){
    this.retrieveStocks();
  }

  retrieveStocks(){
    axios.get("/stocks").then(res =>{
      if(res.data.success){
        this.setState({
          stocks:res.data.existingStocks
        });
      console.log(this.state.stocks);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`/stock/delete/${id}`).then((res) =>{
      alert("Deteted Successfully");
      this.retrieveStocks();
    })
  }

  filterData(stocks,searchKey){
    const result = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchKey) 

    )

    this.setState({stocks:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/stocks").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingStocks,searchKey)
      }
    });
  }

  render(){
    return (
      <div className="body">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
            <h4>ITEM STOCK</h4>
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

        
        <br></br>
        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add Item</a></button>
        <br></br>
        <br></br>

        <table className="table">
          <thead>
            <tr>
            <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Inventory value</th>
                <th scope="col">Manufacture Date</th>
                <th scope="col">Expiry Date</th>
                <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.stocks.map((stocks,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/postStock/${stocks._id}`} style = {{textDecoration:'none'}}>
                    {stocks.name}
                    </a>
                </td>

                <td>{stocks.uPrice}</td>
                <td>{stocks.quantity}</td>
                <td>{stocks.inValue}</td>
                <td>{stocks.mDate}</td>
                <td>{stocks.eDate}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${stocks._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#" onClick={() =>this.onDelete(stocks._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                  </a>
                </td>
              </tr>


            ))}
          </tbody>
        </table>

        
        <br></br>
        <br></br>
        <button className="btn btn-success"><a href="#"style={{textDecoration:'none',color:'white'}}>Report Gen</a></button>
        <button className="btn btn-dark" style={{textDecoration:'none',backgroundColor:'#fc0703', fontSize:'1.25rem' ,padding: '0.5rem', margin: '0.5rem 0',border:'2px', borderRadius: '8px',color:'white'}} onClick={this.GeneratePDF} type="primary">Create pdf</button>  
      </div>
      </div>
    )
  }
} 