import React, { Component } from 'react';
import styled from 'styled-components';
import Background from '../../assets/pay.jpg';
import '../BookingManagement/BookingMain.css';


const Overlay = styled.div`
  background: linear-gradient(
    rgba(0, 0, 0, 0.5), 
    rgba(0, 0, 0, 0.5)
  ),     url(${Background});
  background-size: cover;
  
  background-position: center;
  height: 500px;
  @media (min-width: 768px) {
    height: 660px;
  }
`;

class PaymentMain extends Component {
  render() {
    return (
      <Overlay className="col d-flex justify-content-center text-white p-4">
        
      
       <div> <br></br><h2 className='text'>Select Payment Category</h2><br></br>
       
              <div className="container">
                <div className="display-4 text-center">
                </div>
                
                <div className="text-center">
                <h5 className='text2'><br></br>Banquet Hall Reservation payments</h5>
                </div>
                <div className="text-center">

                  <a
                    className="btn btn-warning btn-primary mb-3"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '.03em',
                      textTransform: 'uppercase',
                      padding: '16px 56px',
                      borderRadius: '6px'
                    }}

                    href="payment" 
                    role="button">
                   Hall Reservation
                  </a>
                  <h5 className='text2'><br></br>Dine-in and Takeaway payments</h5>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-warning btn-primary mb-3"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '.03em',
                      textTransform: 'uppercase',
                      padding: '16px 52px',
                      borderRadius: '6px'
                    }}

                    href="..." 
                    role="button">
                   Dine-in / Takeaway         
                  </a>
                 
                  <h5 className='text2'><br></br>Home Delivery payments</h5>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-warning btn-primary mb-3"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '.03em',
                      textTransform: 'uppercase',
                      padding: '16px 70px',
                      borderRadius: '6px'
                    }}

                    href="..." 
                    role="button">
                    Home Delivery
                  </a>
                 
                </div>
                
              </div>
          </div>
        
                   </Overlay>


    );
  }
}

export default PaymentMain;