import React from 'react';
import ReactDOM from 'react-dom';
import App1 from './App1';
import AppStock from './AppStock';
import AppFruit from './AppFruit';
import AppBread from './AppBread';
import AppEmployee from './AppEmployee';
import AppServer from './AppServer';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App1 />
    <AppStock />
    <AppEmployee />
    <AppServer />
    <AppFruit />
    <AppBread />
  
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
