import React, { Component } from 'react';
import styled from 'styled-components';
import Background from '../../assets/bh.jpg';
import './BookingMain.css';


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

class BookingMain extends Component {
  render() {
    return (
      <Overlay className="col d-flex justify-content-center text-white p-4">
        
      
       <div> <br></br><h2 className='text'>Welcome to Food O' Clock's Banquet Hall</h2><br></br>
       
              <div className="container">
                <div className="display-4 text-center">
                </div>
                
                <div className="text-center"><br></br>
                <h5 className='text2'>See the elegance of our halls!</h5>

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

                    href="/" 
                    role="button">
                   View Gallery
                  </a>
                  <h5 className='text2'><br></br>Researve a hall today!</h5>
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

                    href="/add" 
                    role="button">
                    Reserve Hall
                  </a>
                 
                  <h5 className='text2'><br></br>View the list of reservations</h5>
                </div>
                <div className="text-center">
                  <a
                    className="btn btn-warning btn-primary mb-3"
                    style={{
                      fontSize: '14px',
                      fontWeight: '700',
                      letterSpacing: '.03em',
                      textTransform: 'uppercase',
                      padding: '16px 44px',
                      borderRadius: '6px'
                    }}

                    href="/homeb" 
                    role="button">
                    Reservation List
                  </a>
                 
                </div>
                
              </div>
          </div>
        
                   </Overlay>


    );
  }
}

export default BookingMain;