import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TimeNavBar from './time-navbar';
import App from './App';





ReactDOM.render(
  <React.StrictMode>
      <TimeNavBar/>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

