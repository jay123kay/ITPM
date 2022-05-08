import React, { Component} from 'react';
import axios from 'axios';
import'./Home.css';
import jsPDF from "jspdf";

export default class Home extends Component {
  constructor(props){
  super(props);

  this.state={
    posts:[]
  };

  }

  GeneratePDF =()=>{
    var doc = new jsPDF("p", "pt", "a2", "pdf");
    doc.html(document.querySelector('#content'),{
           callback: function(pdf){
               pdf.save("mypdf.pdf");
           }
    });
  };

  componentDidMount(){
    this.retrievePosts();
  }

  retrievePosts(){
    axios.get("/posts").then(res =>{
      if(res.data.success){
        this.setState({
          posts:res.data.existingPosts
        });
      console.log(this.state.posts);
      }
    });
  }


  onDelete = (id) =>{
    axios.delete(`/post/delete/${id}`).then((res) =>{
      alert("Deteted Successfully");
      this.retrievePosts();
    })
  }

  filterData(posts,searchKey){
    const result = posts.filter((post) =>
    post.fbCode.toLowerCase().includes(searchKey) ||
    post.fnbName.toLowerCase().includes(searchKey)


    )

    this.setState({posts:result})

  }

  handleSearchArea = (e) =>{
    const searchKey = e.currentTarget.value;

    axios.get("/posts").then(res =>{
      if(res.data.success){
        
        this.filterData(res.data.existingPosts,searchKey)
      }
    });
  }

  render(){
    return (
      <div className="body" id ="content">
        <div className="container">
        <div className="row">
          <div className="col-lg-9 mt-2 mb-2">
          <h3>Foods and Beverages</h3>
            <h4>All Items</h4>
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
        
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Code No.</th>
              <th scope="col">Foods and Beverages</th>
              <th scope="col">Main Category</th>
              <th scope="col">Sub Category</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price(LKR).</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.posts.map((posts,index) =>(
              <tr key={index}>
                <th scope="row">{index+1}</th>

                <td>
                    <a href={`/post/${posts._id}`} style = {{textDecoration:'none'}}>
                    {posts.fbCode}
                    </a>
                </td>
                <td>{posts.fnbName}</td>
                <td>{posts.mainCat}</td>
                <td>{posts.subCat}</td>
                <td>{posts.quantity}</td>
                <td>{posts.price}</td>
                <td>
                  <a className="btn btn-warning" href={`/edit/${posts._id}`}>
                    <i className="fas fa-edit"></i>&nbsp;Edit
                  </a>
                  &nbsp;
                  <a className="btn btn-danger" href="#"
                   onClick={() =>this.onDelete(posts._id)}>
                    <i className="fas fa-trash-alt"></i>&nbsp;Delete   
                  </a>
                </td>
              </tr>


            ))}
          </tbody>
        </table>

        <button className="btn btn-success"><a href="/add" style={{textDecoration:'none',color:'white'}}>Add New Items</a></button>
        &nbsp;
        &nbsp;
        &nbsp;
        <button className="btn btn-warning" onClick={this.GeneratePDF} type="primary"><i className="fas fa-download"></i>&nbsp;Report</button>
          
      </div>
      </div>
    )
  }
} 